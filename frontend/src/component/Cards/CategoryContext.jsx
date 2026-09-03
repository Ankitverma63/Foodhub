import { createContext, useContext, useEffect, useState, useMemo } from "react";
<<<<<<< HEAD
import axios from "axios";
=======
import api from "../../api";
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [food_list, setFoodList] = useState([]);
  const [active, setActive] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // 🔐 TOKEN
  const [token, setToken] = useState(localStorage.getItem("token") || "");

<<<<<<< HEAD
  // 🛒 CART (BACKEND)
  const [cart, setCart] = useState({});

  const url = "http://localhost:2500";

=======
  // 🛒 CART
  const [cart, setCart] = useState({});

>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
  /* ================= FOOD ================= */
  useEffect(() => {
    const fetchFood = async () => {
      try {
<<<<<<< HEAD
        const res = await axios.get(`${url}/api/food/list-food`);
        if (res.data.success) setFoodList(res.data.data);
=======
        const res = await api.get("/api/food/list-food");
        if (res.data.success) {
          setFoodList(res.data.data);
        }
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
      } catch (err) {
        console.error("Food fetch error:", err);
      }
    };
<<<<<<< HEAD
=======

>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
    fetchFood();
  }, []);

  /* ================= CART ================= */
<<<<<<< HEAD
  const fetchCart = async (authToken) => {
    try {
      const res = await axios.get(`${url}/api/cart/get`, {
=======

  const fetchCart = async (authToken) => {
    try {
      const res = await api.get("/api/cart/get", {
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (res.data.success) {
        setCart(res.data.cartData || {});
      }
    } catch (err) {
<<<<<<< HEAD
      console.log("Fetch cart error:", err);
=======
      if (err.response?.status !== 401) {
        console.log("Fetch cart error:", err);
      }
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
    }
  };

  useEffect(() => {
    if (token) {
      fetchCart(token);
    } else {
      setCart({});
    }
  }, [token]);

<<<<<<< HEAD
  // 🔁 LISTEN LOGIN / LOGOUT CHANGES
useEffect(() => {
  const syncToken = () => {
    const storedToken = localStorage.getItem("token") || "";
    setToken(storedToken);
  };

  window.addEventListener("authChange", syncToken);

  return () => {
    window.removeEventListener("authChange", syncToken);
  };
}, []);


  /* ================= CART ACTIONS ================= */
=======
  /* ================= AUTH LISTENER ================= */

  useEffect(() => {
    const syncToken = () => {
      const storedToken = localStorage.getItem("token") || "";
      setToken(storedToken);
    };

    window.addEventListener("authChange", syncToken);

    return () => {
      window.removeEventListener("authChange", syncToken);
    };
  }, []);

  /* ================= CART ACTIONS ================= */

>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
  const increaseQty = async (id) => {
    if (!token) {
      alert("Please login to add items to cart");
      return;
    }

    try {
<<<<<<< HEAD
      await axios.post(
        `${url}/api/cart/add`,
=======
      await api.post(
        "/api/cart/add",
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
        { itemId: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
<<<<<<< HEAD
=======

>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
      fetchCart(token);
    } catch (err) {
      console.log("Add cart error:", err);
    }
  };

  const decreaseQty = async (id) => {
    if (!token) return;

    try {
<<<<<<< HEAD
      await axios.post(
        `${url}/api/cart/remove`,
=======
      await api.post(
        "/api/cart/remove",
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
        { itemId: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
<<<<<<< HEAD
=======

>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
      fetchCart(token);
    } catch (err) {
      console.log("Remove cart error:", err);
    }
  };

<<<<<<< HEAD
  // ✅ THIS WAS MISSING
=======
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
  const toggleCart = async (id) => {
    if (cart[id]) {
      await decreaseQty(id);
    } else {
      await increaseQty(id);
    }
  };

  /* ================= FILTER ================= */
<<<<<<< HEAD
=======

>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
  const filtered = useMemo(() => {
    return food_list.filter((item) => {
      const searchLower = searchQuery.toLowerCase().trim();

      const matchesSearch =
        item.name.toLowerCase().includes(searchLower) ||
        item.category.toLowerCase().includes(searchLower);

      const matchesCategory =
        active === "All" ||
        item.category?.toLowerCase() === active.toLowerCase();

      return searchQuery ? matchesSearch : matchesCategory;
    });
  }, [active, searchQuery, food_list]);

  return (
    <CategoryContext.Provider
      value={{
        active,
        setActive,
        searchQuery,
        setSearchQuery,
        filtered,
        food_list,
        cart,
<<<<<<< HEAD
        toggleCart,   // ✅ NOW DEFINED
        increaseQty,
        decreaseQty,
        url,
=======
        toggleCart,
        increaseQty,
        decreaseQty,
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
        token,
        setToken,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);