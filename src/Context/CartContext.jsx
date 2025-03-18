import React, { createContext, useState, useEffect, useContext } from "react";
import {
  collection,
  setDoc,
  doc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../Data/Firebase";
import { AuthContext } from "./AuthContex";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const [userID, setuserID] = useState(0);

  useEffect(() => {
    if (currentUser) {
      let userId = currentUser.uid;
      setuserID(userId);
      fetchCartData(userId);
    }
  }, [currentUser]);

  const addItemToCart = async (item) => {
    if (currentUser) {
      const cartRef = doc(db, `User/${userID}/Cart/${item.id}`);
      const cartDoc = await setDoc(cartRef, {
        id: item.id,
        price: item.price,
        stock: item.stock,
        thumbnail: item.thumbnail,
        title: item.title,
        totalPrice: item.price,
        quantity: 1,
      });
      fetchCartData(userID);
    }
  };

  const fetchCartData = async (userID) => {
    if (currentUser) {
      try {
        const cartRef = collection(db, `User/${userID}/Cart`);
        const cartDocs = await getDocs(cartRef);

        const cartData = cartDocs.docs.map((doc) => doc.data());
        setCart(cartData);
      } catch (err) {
        console.log(err);
      }
      fetchCartData(userID);
    }
  };

  const increaseQuantity = async (id) => {
    if (currentUser) {
      try {
        // Get a reference to the collection
        const cartRef = collection(db, `User/${userID}/Cart`);
        // Fetch documents from the collection
        const cartDocs = await getDocs(cartRef);

        // Iterate over documents
        for (const docSnapshot of cartDocs.docs) {
          const data = docSnapshot.data();

          // Check if the document's ID matches the ID to be updated
          if (data.id === id) {
            const updatedQuantity = data.quantity + 1;
            const updatedTotalPrice = data.price * updatedQuantity;

            // Get a reference to the specific document
            const updateCartRef = doc(db, `User/${userID}/Cart/${id}`);

            // Update the document with new quantity and total price
            await updateDoc(updateCartRef, {
              quantity: updatedQuantity,
              totalPrice: updatedTotalPrice,
            });

            // Optionally update local state here
            setCart((prevCart) =>
              prevCart.map((item) =>
                item.id === id
                  ? {
                      ...item,
                      quantity: updatedQuantity,
                      totalPrice: updatedTotalPrice,
                    }
                  : item,
              ),
            );

            break; // Exit the loop after updating
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const decreaseQuantity = async (id) => {
    if (currentUser) {
      try {
        // Get a reference to the collection
        const cartRef = collection(db, `User/${userID}/Cart`);
        // Fetch documents from the collection
        const cartDocs = await getDocs(cartRef);

        // Iterate over documents
        for (const docSnapshot of cartDocs.docs) {
          const data = docSnapshot.data();

          // Check if the document's ID matches the ID to be updated
          if (data.id === id) {
            const updatedQuantity = data.quantity - 1;
            const updatedTotalPrice = data.price * updatedQuantity;

            // Get a reference to the specific document
            const updateCartRef = doc(db, `User/${userID}/Cart/${id}`);

            // Update the document with new quantity and total price
            await updateDoc(updateCartRef, {
              quantity: updatedQuantity,
              totalPrice: updatedTotalPrice,
            });

            // Optionally update local state here
            setCart((prevCart) =>
              prevCart.map((item) =>
                item.id === id
                  ? {
                      ...item,
                      quantity: updatedQuantity,
                      totalPrice: updatedTotalPrice,
                    }
                  : item,
              ),
            );

            break; // Exit the loop after updating
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const deleteCart = async (id) => {
    if (currentUser) {
      try {
        const catRef = collection(db, `User/${userID}/Cart`);
        const cartDoc = await getDocs(catRef);

        for (const querrySnapshot of cartDoc.docs) {
          const data = querrySnapshot.data();
          if (data.id === id) {
            const deleteCartRef = doc(db, `User/${userID}/Cart/${id}`);
            await deleteDoc(deleteCartRef);
            fetchCartData(userID);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        increaseQuantity,
        decreaseQuantity,
        deleteCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
