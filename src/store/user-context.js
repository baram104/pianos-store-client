import { useState } from "react";
import React from "react";
import * as api from "../DAL/api";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext({ isLoggedIn: false });

export const UserContextProvider = (props) => {
  const nav = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: "",
    isLoggedIn: false,
  });
  const [userCart, setUserCart] = useState([]);
  const [userFavProducts, setUserFavProducts] = useState([]);
  const logoutHandler = () => {
    setUserDetails({ username: "", isLoggedIn: false });
  };

  const authCheck = () => {
    if (!userDetails.isLoggedIn) {
      nav("/login");
      return;
    }
  };
  const updateCart = async () => {
    const cart = await api.getCart();
    setUserCart(cart);
  };

  const updateWishList = async () => {
    const wishList = await api.getFavProducts();
    setUserFavProducts(wishList);
  };
  const loginHandler = async (username) => {
    await api.getCart().then((data) => setUserCart(data));
    setUserDetails({ username, isLoggedIn: true });
  };

  const addToCart = async (id, quantity = 1) => {
    authCheck();
    const res = await api.addPianoToCart(id, quantity);
    updateCart();
  };
  const removeFromCart = async (id) => {
    authCheck();
    await api.deleteCartProd(id);
    updateCart();
  };
  const updateCartProd = async (id, quantity) => {
    authCheck();
    await api.updateCartProd(id, quantity);
    updateCart();
  };

  const addToWishList = async (id) => {
    authCheck();
    await api.addFavProd(id);
    updateWishList();
  };
  const removeFromWishList = async (id) => {
    authCheck();
    await api.deleteFavProd(id);
    updateWishList();
  };

  return (
    <UserContext.Provider
      value={{
        userDetails,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        userCart,
        addToCart,
        removeFromCart,
        updateCartProd,
        userFavProducts,
        setUserFavProducts,
        addToWishList,
        removeFromWishList,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContext;
