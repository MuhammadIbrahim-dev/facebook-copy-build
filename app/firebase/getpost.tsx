import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../components/db/config';

export const getpost = async () => {
  try {
    const docRef = await getDocs(collection(db, 'posts'));
    
    let recipes = [];
    docRef.forEach((doc) => {
      recipes.push({ id: doc.id, ...doc.data() });
    }); 

    console.log(recipes); // Corrected variable name
    return recipes;
  } catch (error) {
    console.error("Error fetching document: ", error);
    return [];
  }
};
