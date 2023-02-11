import { collection, addDoc, doc, setDoc } from "firebase/firestore/lite";
import { useState } from "react";
import { MenuItem } from "src/components/item-card/grid-card";
import { db } from "../config/firebase";

const useAddItem = (): [
  (category: string, payload: MenuItem) => void,
  boolean
] => {
  const [loading, setLoading] = useState<boolean>(false);

  const onAddItem = async (category: string, payload: MenuItem) => {
    if (!category && !payload) return;
    setLoading(true);
    try {
      const categoryRef = doc(collection(db, category?.toLowerCase()));
      await setDoc(categoryRef, {
        ...payload,
        creator: "USER",
      });
      setLoading(false);
    } catch (err) {
      console.log("Error", err);
    }
  };

  return [onAddItem, loading];
};

export default useAddItem;
