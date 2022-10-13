import { configureStore, createSlice } from "@reduxjs/toolkit";
import * as api from "../DAL/api";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: "",
    isLoggedIn: false,
    firstName: "",
  },
  reducers: {
    setUserDetails(state, action) {
      state.username = action.payload.username;
      state.firstName = action.payload.firstName;
    },
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    updateCart(state, action) {
      state.cart = action.payload;
    },
  },
});

const wishListSlice = createSlice({
  name: "wishList",
  initialState: { wishList: [] },
  reducers: {
    updateWishList(state, action) {
      state.wishList = action.payload;
    },
  },
});

export const addItemToCart = (id, quantity = 1) => {
  return async (dispatch) => {
    await api.addPianoToCart(id, quantity);
    const cart = await api.getCart();
    dispatch(cartSlice.actions.updateCart(cart));
  };
};
export const deleteCart = () => {
  return async (dispatch) => {
    await api.deleteCart();
    dispatch(cartSlice.actions.updateCart([]));
  };
};
export const removeFromCart = (id) => {
  return async (dispatch) => {
    await api.deleteCartProd(id);
    const cart = await api.getCart();
    dispatch(cartSlice.actions.updateCart(cart));
  };
};
export const updateCartProd = (id, quantity) => {
  return async (dispatch) => {
    await api.updateCartProd(id, quantity);
    const cart = await api.getCart();
    dispatch(cartSlice.actions.updateCart(cart));
  };
};

export const addToWishList = (id) => {
  return async (dispatch) => {
    await api.addFavProd(id);
    const wishList = await api.getFavProducts();
    dispatch(wishListSlice.actions.updateWishList(wishList));
  };
};
export const removeFromWishList = (id) => {
  return async (dispatch) => {
    await api.deleteFavProd(id);
    const wishList = await api.getFavProducts();
    dispatch(wishListSlice.actions.updateWishList(wishList));
  };
};

export const loginHandler = (username, firstName) => {
  return async (dispatch) => {
    try {
      const cart = await api.getCart();
      const wishList = await api.getFavProducts();
      dispatch(wishListSlice.actions.updateWishList(wishList));
      dispatch(cartSlice.actions.updateCart(cart));
      dispatch(authSlice.actions.setUserDetails({ username, firstName }));
      dispatch(authSlice.actions.setIsLoggedIn(true));
    } catch (error) {}
  };
};

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
    wishList: wishListSlice.reducer,
  },
});
