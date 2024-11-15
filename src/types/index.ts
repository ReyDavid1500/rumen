export type Product = {
  _id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
};

export type OrderProduct = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type ShoppingCart = {
  _id: string;
  userId: string;
  products: OrderProduct[];
  shipping: number;
  subtotal: number;
  total: number;
  isActive: boolean;
};

export type AuthData = {
  access_token: string;
  name: string;
  _id: string;
  email: string;
  address: string;
  phone: string;
};

export type LoggedUser = {
  _id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
};

export type Order = {
  _id: string;
  userId: string;
  shoppingCart: ShoppingCart;
  address: string;
  phone: string;
  payment: string;
  isCompleted: boolean;
};
