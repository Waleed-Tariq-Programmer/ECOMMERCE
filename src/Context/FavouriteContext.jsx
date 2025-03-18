import { createContext, useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthContex";
import { collection, setDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../Data/Firebase";

export const FavouriteContext = createContext();

export const FavouriteProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  const [favourite, setFavourite] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (currentUser) {
      let uid = currentUser.uid;
      setUserId(uid);
    }
  }, [currentUser]);

  useEffect(() => {
    if (userId) {
      fetchFavourite();
    }
  }, [userId,setFavourite,favourite]);

  function addToFavourite(item) {
    let id = item.id.toString();

    if (currentUser) {
      try {
        const favourDoc = doc(db, `User/${userId}/favourite`, id);
        setDoc(favourDoc, {
          title: item.title,
          thumbnail: item.thumbnail,
          price: item.price,
        });
      } catch (err) {
        console.log("Error saving favourite items:", err);
      }
      fetchFavourite();

    }
  }

  async function fetchFavourite() {
    if (userId) {
      try {
        const favourDoc = collection(db, `User/${userId}/favourite`);
        const querySnapshot = await getDocs(favourDoc);
        const allFavourites = querySnapshot.docs.map(doc => doc.data());
        setFavourite(allFavourites);
      } catch (err) {
        console.error("Error fetching favourite items:", err);
      }
    }
  }
  return (
    <FavouriteContext.Provider value={{ addToFavourite,favourite }}>
      {children}
    </FavouriteContext.Provider>
  );
};
