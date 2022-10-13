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
  const logoutHandler = async () => {
    await api.logout();
    setUserCart([]);
    setUserFavProducts([]);
    setUserDetails({ username: "", isLoggedIn: false });
  };

  const authCheck = () => {
    if (!userDetails.isLoggedIn) {
      nav("/login");
      return;
    }
    return true;
  };
  const updateCart = async () => {
    const cart = await api.getCart();
    setUserCart(cart);
  };


  const updateWishList = async () => {
    const wishList = await api.getFavProducts();
    setUserFavProducts(wishList);
  };
  const loginHandler = async (username, firstName) => {
    try {
      await api.getCart().then((data) => setUserCart(data));
    } catch (error) {}

    setUserDetails({ username, isLoggedIn: true, firstName });
  };

  const addToCart = async (id, quantity = 1) => {
    if (!authCheck()) return;
    await api.addPianoToCart(id, quantity);
    updateCart();
  };

  const deleteCart = async () => {
    if (!authCheck()) return;
    await api.deleteCart();
    updateCart();
  };
  const removeFromCart = async (id) => {
    if (!authCheck()) return;
    await api.deleteCartProd(id);
    updateCart();
  };
  const updateCartProd = async (id, quantity) => {
    if (!authCheck()) return;
    await api.updateCartProd(id, quantity);
    updateCart();
  };

  const addToWishList = async (id) => {
    if (!authCheck()) return;
    await api.addFavProd(id);
    updateWishList();
  };
  const removeFromWishList = async (id) => {
    if (!authCheck()) return;
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
        deleteCart,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContext;
