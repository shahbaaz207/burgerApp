import { collection, DocumentData, getDocs } from "firebase/firestore/lite";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { db } from "../config/firebase";

export type ItemType = {
  data: DocumentData;
  id: string;
};
const useLoadItem = (
  categoryName: string
): [
  ItemType[],
  boolean,
  (name: string) => void,
  Dispatch<SetStateAction<ItemType[]>>
] => {
  const [results, setResults] = useState<ItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const init = async (name: string) => {
    if (!name) return;
    setLoading(true);
    const items = collection(db, name?.toLowerCase());
    const itemResp = await getDocs(items);
    if (itemResp) {
      const resultData = itemResp.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setResults(resultData);
    }
    setLoading(false);
  };
  useEffect(() => {
    init(categoryName);
  }, []);

  return [results, loading, init, setResults];
};

export default useLoadItem;
