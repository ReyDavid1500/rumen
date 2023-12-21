import { formatCurrency } from "../../assets/utils";

interface Order {
  id: number;
  name: string;
  address: string;
  phone: string;
  products: Product[];
  price: number;
  isCompleted: boolean;
}

interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const orders: Order[] = [
  {
    id: 1,
    name: "David Guzmán",
    address: "Camino al Volcan 12",
    phone: "+56984541821",
    products: [
      {
        id: 1,
        name: "Hamburguesa Ahumada",
        quantity: 1,
        price: 12000,
      },
      {
        id: 2,
        name: "Papas Fritas Grandes",
        quantity: 1,
        price: 5000,
      },
      {
        id: 3,
        name: "CocaCola",
        quantity: 1,
        price: 2000,
      },
    ],
    price: 19000,
    isCompleted: false,
  },
  {
    id: 2,
    name: "Vicoria Arellano",
    address: "Parque el Volcán 10",
    phone: "+56984541821",
    products: [
      {
        id: 1,
        name: "Hamburguesa Ahumada",
        quantity: 1,
        price: 12000,
      },
      {
        id: 2,
        name: "Papas Fritas Grandes",
        quantity: 1,
        price: 5000,
      },
      {
        id: 3,
        name: "CocaCola",
        quantity: 1,
        price: 2000,
      },
    ],
    price: 19000,
    isCompleted: false,
  },
  {
    id: 3,
    name: "Sofia Burky",
    address: "Peumayen 112",
    phone: "+56984541821",
    products: [
      {
        id: 1,
        name: "Hamburguesa Ahumada",
        quantity: 1,
        price: 12000,
      },
      {
        id: 2,
        name: "Papas Fritas Grandes",
        quantity: 1,
        price: 5000,
      },
      {
        id: 3,
        name: "CocaCola",
        quantity: 1,
        price: 2000,
      },
    ],
    price: 19000,
    isCompleted: false,
  },
  {
    id: 4,
    name: "Rodrigo y Belén",
    address: "Camino Internacional 20",
    phone: "+56984541821",
    products: [
      {
        id: 1,
        name: "Hamburguesa Ahumada",
        quantity: 1,
        price: 12000,
      },
      {
        id: 2,
        name: "Papas Fritas Grandes",
        quantity: 1,
        price: 5000,
      },
      {
        id: 3,
        name: "CocaCola",
        quantity: 1,
        price: 2000,
      },
    ],
    price: 19000,
    isCompleted: false,
  },
];

function RumenDashboard() {
  return (
    <aside className="block md:w-[25rem] md:fixed md:bottom-[-100px] md:right-auto bg-white p-4 border-2 rounded-md border-gray-300 md:h-[100vh] overflow-y-auto">
      <div>
        <h1 className="text-center font-bold mb-4">
          Bandeja de Entrada Pedidos
        </h1>
      </div>
      <ul>
        {orders.map((order) => (
          <li
            className="flex flex-row justify-between border-2 border-light-orange p-2 rounded-md text-xs mb-4"
            key={order.id}
          >
            <div>
              <h2>{order.name}</h2>
              <p>{order.address}</p>
              <p>{order.phone}</p>
            </div>
            <ul>
              {order.products.map((product) => (
                <li className="text-xs flex flex-row justify-between">
                  <p>{product.name}</p>
                  <p>{formatCurrency(product.price)}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default RumenDashboard;
