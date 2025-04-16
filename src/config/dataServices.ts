import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";


export const getProductData = async ()=>{
    try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const list = [];
        querySnapshot.forEach((docs)=>{
            list.push(docs.data())
        })
        return list;
    } catch (error) {
        console.error("Error fetching product data:", error);
        
    }
} 