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
}

const order: Order[] = [
  {
    id: 1,
    name: "David",
    address: "Camino al Volcan 12",
    phone: "+56984541821",
    products: [
      {
        id: 1,
        name: "Hamburguesa Ahumada",
        quantity: 1,
      },
      {
        id: 2,
        name: "",
        quantity: 1,
      },
      {
        id: 3,
        name: "Hamburguesa Ahumada",
        quantity: 1,
      },
    ],
    price: 12000,
    isCompleted: false,
  },
];

function RumenDashboard() {
  return (
    <aside className="w-[100%] bg-white p-4 border-2 rounded-md border-gray-300 md:h-[100vh]">
      <div>
        <h1 className="text-center font-bold">Bandeja de Entrada Pedidos</h1>
      </div>
      <ul>{}</ul>
    </aside>
  );
}

export default RumenDashboard;
