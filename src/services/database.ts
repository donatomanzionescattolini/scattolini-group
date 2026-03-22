import {collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, updateDoc, where, writeBatch} from 'firebase/firestore';
import {db} from "../config/firebase";
import {Area} from "../models/areas/Area";
import Desarrollo from '../models/desarrollos/Desarrollo';
import {AreaDocument, DesarrolloDocument} from '../types/firestore';

// Collection names
const DESARROLLOS_COLLECTION = 'desarrollos';
const AREAS_COLLECTION = 'areas';

const BATCH_WRITE_LIMIT = 400;

function isReactElementLike(value: unknown): boolean {
    return Boolean(value && typeof value === 'object' && '$$typeof' in (value as Record<string, unknown>));
}

export function sanitizeForFirestore(value: any): any {
    if (value === undefined) return undefined;
    if (value === null) return null;
    if (typeof value === 'function') return undefined;
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') return value;
    if (value instanceof Date) return value;
    if (Array.isArray(value)) {
        return value
            .map((item) => sanitizeForFirestore(item))
            .filter((item) => item !== undefined);
    }
    if (value instanceof Map) {
        const mapped: Record<string, any> = {};
        value.forEach((entryValue, entryKey) => {
            const sanitized = sanitizeForFirestore(entryValue);
            if (sanitized !== undefined) {
                mapped[String(entryKey)] = sanitized;
            }
        });
        return mapped;
    }
    if (isReactElementLike(value)) return undefined;
    if (typeof value === 'object') {
        const data: Record<string, any> = {};
        Object.entries(value).forEach(([key, entryValue]) => {
            const sanitized = sanitizeForFirestore(entryValue);
            if (sanitized !== undefined) {
                data[key] = sanitized;
            }
        });
        return data;
    }
    return undefined;
}

async function saveDocumentsBatch(
    collectionName: string,
    documents: Array<{ id: string; data: Record<string, any> }>
): Promise<void> {
    const sanitizedDocuments = documents
        .map(({id, data}) => ({
            id: String(id || '').trim(),
            data: sanitizeForFirestore(data),
        }))
        .filter((entry) => entry.id && entry.data && Object.keys(entry.data).length > 0);

    for (let index = 0; index < sanitizedDocuments.length; index += BATCH_WRITE_LIMIT) {
        const batch = writeBatch(db);
        const chunk = sanitizedDocuments.slice(index, index + BATCH_WRITE_LIMIT);
        chunk.forEach(({id, data}) => {
            batch.set(doc(db, collectionName, id), data, {merge: true});
        });
        await batch.commit();
    }
}

// Helper to serialize Desarrollo for Firestore
export function serializeDesarrollo(desarrollo: Desarrollo): any {
    const data: any = {};

    // Get all properties from the desarrollo object
    Object.keys(desarrollo).forEach((key) => {
        const value = desarrollo[key];

        // Skip functions and React elements
        if (typeof value === 'function') return;
        if (isReactElementLike(value)) return;

        // Handle caracteristicas specially - store as strings or skip JSX
        if (key === 'caracteristicas' && value && typeof value === 'object') {
            // Skip caracteristicas with JSX for now
            return;
        }

        const sanitized = sanitizeForFirestore(value);
        if (sanitized !== undefined) {
            data[key] = sanitized;
        }
    });

    return data;
}

// Helper to serialize Area for Firestore
export function serializeArea(area: Area): any {
    const data: any = {};

    Object.keys(area).forEach((key) => {
        const value = (area as any)[key];

        // Skip functions and React elements
        if (typeof value === 'function') return;
        if (isReactElementLike(value)) return;

        const sanitized = sanitizeForFirestore(value);
        if (sanitized !== undefined) {
            data[key] = sanitized;
        }
    });

    return data;
}

// Desarrollo CRUD operations
export async function getDesarrollo(id: string): Promise<DesarrolloDocument | null> {
    const docRef = doc(db, DESARROLLOS_COLLECTION, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {id: docSnap.id, ...docSnap.data()} as DesarrolloDocument;
    }
    return null;
}

export async function getAllDesarrollos(): Promise<DesarrolloDocument[]> {
    const querySnapshot = await getDocs(collection(db, DESARROLLOS_COLLECTION));
    return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    })) as DesarrolloDocument[];
}

export async function getDesarrollosByArea(areaName: string): Promise<DesarrolloDocument[]> {
    const byAreaObject = query(
        collection(db, DESARROLLOS_COLLECTION),
        where('area.name', '==', areaName)
    );
    const byAreaName = query(
        collection(db, DESARROLLOS_COLLECTION),
        where('areaName', '==', areaName)
    );

    const [objectSnapshot, nameSnapshot] = await Promise.all([
        getDocs(byAreaObject),
        getDocs(byAreaName),
    ]);

    const merged = new Map<string, DesarrolloDocument>();
    [...objectSnapshot.docs, ...nameSnapshot.docs].forEach((desarrolloDoc) => {
        merged.set(desarrolloDoc.id, {
            id: desarrolloDoc.id,
            ...desarrolloDoc.data(),
        } as DesarrolloDocument);
    });

    return Array.from(merged.values());
}

export async function saveDesarrollo(id: string, data: any): Promise<void> {
    const docRef = doc(db, DESARROLLOS_COLLECTION, id);
    await setDoc(docRef, sanitizeForFirestore(data), {merge: true});
}

export async function saveDesarrollosBatch(documents: Array<{ id: string; data: Record<string, any> }>): Promise<void> {
    await saveDocumentsBatch(DESARROLLOS_COLLECTION, documents);
}

export async function updateDesarrollo(
    id: string,
    data: Partial<any>
): Promise<void> {
    const docRef = doc(db, DESARROLLOS_COLLECTION, id);
    await updateDoc(docRef, data);
}

export async function deleteDesarrollo(id: string): Promise<void> {
    const docRef = doc(db, DESARROLLOS_COLLECTION, id);
    await deleteDoc(docRef);
}

// Area CRUD operations
export async function getArea(id: string): Promise<AreaDocument | null> {
    const docRef = doc(db, AREAS_COLLECTION, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {id: docSnap.id, ...docSnap.data()} as AreaDocument;
    }
    return null;
}

export async function getAllAreas(): Promise<AreaDocument[]> {
    const querySnapshot = await getDocs(collection(db, AREAS_COLLECTION));
    return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    })) as AreaDocument[];
}

export async function saveArea(id: string, data: any): Promise<void> {
    const docRef = doc(db, AREAS_COLLECTION, id);
    await setDoc(docRef, sanitizeForFirestore(data), {merge: true});
}

export async function saveAreasBatch(documents: Array<{ id: string; data: Record<string, any> }>): Promise<void> {
    await saveDocumentsBatch(AREAS_COLLECTION, documents);
}

export async function updateArea(
    id: string,
    data: Partial<any>
): Promise<void> {
    const docRef = doc(db, AREAS_COLLECTION, id);
    await updateDoc(docRef, data);
}

export async function deleteArea(id: string): Promise<void> {
    const docRef = doc(db, AREAS_COLLECTION, id);
    await deleteDoc(docRef);
}

export async function deleteAreaWithProjects(areaName: string): Promise<{ deletedProjects: string[] }> {
    const impactedProjects = await getDesarrollosByArea(areaName);

    await Promise.all([
        deleteArea(areaName),
        ...impactedProjects.map((project) => deleteDesarrollo(project.id)),
    ]);

    return {
        deletedProjects: impactedProjects.map((project) => project.nombre || project.id),
    };
}
