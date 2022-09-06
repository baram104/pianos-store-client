export const getPianos = async (category_id) => {
  let res;
  if (category_id) {
    res = await fetch(`http://localhost:3100/products/category/${category_id}`);
  } else {
    res = await fetch("http://localhost:3100/products");
  }
  return res.json();
};

export const getPianosByQuery = async (key, value) => {
  let res;
  if (key) {
    res = await fetch(`http://localhost:3100/products?${key}=${value}`);
  } else {
    res = await fetch("http://localhost:3100/products");
  }
  return res.json();
};

export const getCategories = async () => {
  const res = await fetch("http://localhost:3100/categories");
  return res.json();
};

export const getPiano = async (id) => {
  const res = await fetch(`http://localhost:3100/products/${id}`);
  return res.json();
};

export const addPianoToCart = async (prodId, quantity) => {
  const res = await fetch(`http://localhost:3100/cart`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({ prodId, quantity }),
    headers: { "Content-Type": "application/json" },
  });
};

export const getCart = async () => {
  const res = await fetch("http://localhost:3100/cart", {
    credentials: "include",
  });
  return res.json();
};

export const updateCartProd = async (prodId, quantity) => {
  const res = await fetch(`http://localhost:3100/cart/${prodId}`, {
    method: "PUT",
    body: JSON.stringify({ quantity }),
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
};

export const deleteCartProd = async (prodId) => {
  const res = await fetch(`http://localhost:3100/cart/${prodId}`, {
    method: "DELETE",
    credentials: "include",
  });
};

export const deleteCart = async () => {
  const res = await fetch(`http://localhost:3100/cart`, {
    method: "DELETE",
    credentials: "include",
  });
};

export const getCheckout = async () => {
  const res = await fetch(`http://localhost:3100/cart/checkout`, {
    credentials: "include",
  });
  return res.json();
};

export const login = async (username, password) => {
  const res = await fetch(`http://localhost:3100/users/login`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res;
};

export const register = async (
  username,
  password,
  email,
  firstName,
  lastName
) => {
  const res = await fetch(`http://localhost:3100/users/register`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, email, firstName, lastName }),
  });
  return res;
};

export const deleteFavProd = async (prodId) => {
  const res = await fetch(`http://localhost:3100/favorite-products/${prodId}`, {
    method: "DELETE",
    credentials: "include",
  });
};
export const getFavProducts = async () => {
  const res = await fetch(`http://localhost:3100/favorite-products`, {
    credentials: "include",
  });
  return res.json();
};
export const updateFavProd = async (prodId, notifyWhenInStock) => {
  const res = await fetch(`http://localhost:3100/favorite-products/${prodId}`, {
    credentials: "include",
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ notifyWhenInStock }),
  });
};

export const addFavProd = async (prodId) => {
  const res = await fetch(`http://localhost:3100/favorite-products`, {
    credentials: "include",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prodId }),
  });
};

export const getOrder = async (id) => {
  const res = await fetch(`http://localhost:3100/orders/${id}`, {
    credentials: "include",
  });
  return res.json();
};

export const placeOrder = async (products) => {
  const res = await fetch(`http://localhost:3100/orders`, {
    credentials: "include",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(products),
  });
};

export const getRateOrder = async (orderId) => {
  const res = await fetch(`http://localhost:3100/rating/${orderId}`, {
    credentials: "include",
  });
  return res.json();
};

export const submitRateOrder = async (orderId, ratedProducts) => {
  const res = await fetch(`http://localhost:3100/rating`, {
    credentials: "include",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ratedProducts, orderId }),
  });
};
