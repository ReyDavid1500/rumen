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
};

export type LoggedUser = {
  _id: string;
  name: string;
  email: string;
  address: string;
};
