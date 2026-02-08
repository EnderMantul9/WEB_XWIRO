
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, orderBy, limit } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDummyKey",
  authDomain: "statistika-terpercaya.firebaseapp.com",
  projectId: "statistika-terpercaya",
  storageBucket: "statistika-terpercaya.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:dummyid"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

export async function getCollectionData(collectionName: string, limitCount: number = 10) {
  try {
    const q = query(collection(db, collectionName), limit(limitCount));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching Firestore data:", error);
    return [];
  }
}
