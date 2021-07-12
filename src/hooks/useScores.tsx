import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

const useScores = () => {
  const [scores, setScores] = useState([]);
  const [scoresCollection, loadingScores, error] = useCollection(
    db.collection("scores").orderBy("points", "asc").limit(10)
  );

  useEffect(() => {
    const newScores = scoresCollection?.docs
        .map((doc: any) => ({
          ...doc.data(),
          key: doc,
        }))
        .reverse() || [] as any;

    setScores(newScores);
  }, [scoresCollection]);

  return { scores, loadingScores, error };
};

export default useScores;
