import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../config/firebase';
import Desarrollo from '../models/desarrollos/Desarrollo';
import { Area } from '../models/areas/Area';
import { DesarrolloDocument, AreaDocument } from '../types/firestore';

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
    return { id: docSnap.id, ...docSnap.data() } as DesarrolloDocument;
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
  const q = query(
    collection(db, DESARROLLOS_COLLECTION),
    where('area.name', '==', areaName)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as DesarrolloDocument[];
}

export async function saveDesarrollo(id: string, data: any): Promise<void> {
  const docRef = doc(db, DESARROLLOS_COLLECTION, id);
  await setDoc(docRef, data, { merge: true });
}

export async function updateDesarrollo(
  id: string,
  data: Partial<any>
): Promise<void> {
  const docRef = doc(db, DESARROLLOS_COLLECTION, id);
  await updateDoc(docRef, data);
}

// Area CRUD operations
export async function getArea(id: string): Promise<AreaDocument | null> {
  const docRef = doc(db, AREAS_COLLECTION, id);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as AreaDocument;
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
  await setDoc(docRef, data, { merge: true });
}

export async function updateArea(
  id: string,
  data: Partial<any>
): Promise<void> {
  const docRef = doc(db, AREAS_COLLECTION, id);
  await updateDoc(docRef, data);
}
