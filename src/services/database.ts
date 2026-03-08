import {collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, updateDoc, where,} from 'firebase/firestore';
import {db} from "../config/firebase";
import {Area} from "../models/areas/Area";
import Desarrollo from '../models/desarrollos/Desarrollo';
import {AreaDocument, DesarrolloDocument} from '../types/firestore';

// Collection names
const DESARROLLOS_COLLECTION = 'desarrollos';
const AREAS_COLLECTION = 'areas';

// Helper to serialize Desarrollo for Firestore
export function serializeDesarrollo(desarrollo: Desarrollo): any {
    const data: any = {};

    // Get all properties from the desarrollo object
    Object.keys(desarrollo).forEach((key) => {
        const value = desarrollo[key];

        // Skip functions and React elements
        if (typeof value === 'function') return;
        if (value && typeof value === 'object' && '$$typeof' in value) return;

        // Handle caracteristicas specially - store as strings or skip JSX
        if (key === 'caracteristicas' && value && typeof value === 'object') {
            // Skip caracteristicas with JSX for now
            return;
        }

        data[key] = value;
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
        if (value && typeof value === 'object' && '$$typeof' in value) return;

        data[key] = value;
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
    await setDoc(docRef, data, {merge: true});
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
    await setDoc(docRef, data, {merge: true});
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
