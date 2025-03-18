import { createContext, useState, useEffect } from "react";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  where,
  getDoc,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../Data/Firebase";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [selectCategorie, setselectCategorie] = useState("");
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});
  const [ProductId, setProductId] = useState();
  const [popularProducts, setPopularProducts] = useState([]);

  const getID = (id) => {
    setProductId(id);
  };

  const FetchData = async (url, setter) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setter(data.products || data);
    } catch (error) {
      console.log(error);
    }
  };

  const FetchAllProducts = async () => {
    let allProductsData = [];
    let limit = 30;
    let skip = 0;
    let hasMore = true;

    while (hasMore) {
      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
        );
        const data = await response.json();
        if (data.products && data.products.length > 0) {
          allProductsData = [...allProductsData, ...data.products];
          skip += limit;
        } else {
          hasMore = false;
        }
      } catch (error) {
        console.log(error);
        hasMore = false;
      }
    }
    saveData(allProductsData);
  };

  const saveData = async (allProductsData) => {
    try {
      for (const product of allProductsData) {
        await setDoc(doc(db, "Product", product.id.toString()), {
          title: product.title,
          id: product.id,
          description: product.description,
          category: product.category,
          price: product.price,
          stock: product.stock,
          thumbnail: product.thumbnail,
          rating: product.rating,
          availabilityStatus: product.availabilityStatus,
          reviews: product.reviews,
        });
      }
    } catch (error) {
      console.error("Error saving product data:", error);
    }
  };

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Product"));
      const products = [];
      querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
      });
      setAllProducts(products);
    } catch (error) {
      console.error("Error retrieving product data:", error);
    }
  };

  const fetchProductsByCategory = async (category) => {
    const q = query(
      collection(db, "Product"),
      where("category", "==", category),
    );
    const querySnapshot = await getDocs(q);
    const productList = [];

    querySnapshot.forEach((product) => {
      productList.push(product.data());
    });
    setCategoryProduct(productList);
  };

  const fetchProductById = async (id) => {
    const docRef = doc(db, "Product", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setSingleProduct(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  const fetchPopularProducts = async () => {
    try {
      const q = query(
        collection(db, "Product"),
        orderBy("rating", "desc"),
        limit(8),
      );
      const querySnapshot = await getDocs(q);
      const popularProductsList = [];

      querySnapshot.forEach((product) => {
        popularProductsList.push(product.data());
      });

      setPopularProducts(popularProductsList);
    } catch (error) {
      console.error("Error fetching popular products:", error);
    }
  };
  useEffect(() => {
    fetchPopularProducts();
  }, []);

  useEffect(() => {
    FetchData("https://dummyjson.com/products/categories", setCategoriesList);
    FetchAllProducts().then(() => fetchData());
  }, []);

  useEffect(() => {
    if (selectCategorie) {
      fetchProductsByCategory(selectCategorie);
    }
  }, [selectCategorie]);

  useEffect(() => {
    if (ProductId) {
      fetchProductById(ProductId);
    }
  }, [ProductId]);

  return (
    <ProductContext.Provider
      value={{
        categoriesList,
        setselectCategorie,
        categoryProduct,
        allProducts,
        getID,
        singleProduct,
        popularProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
