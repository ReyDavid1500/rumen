import ShopLayout from "../../Components/ShopLayout";

function OrderResume() {
  return (
    <ShopLayout>
      <main className="flex flex-col justify-between items-center mt-20 pb-20">
        <p className="text-4xl text-center font-bold mt-20 mb-20 md:text-6xl">
          Gracias por tu compra!!
        </p>
        <a
          className="text-light-green font-bold cursor-pointer"
          href="/shopping"
        >
          Volver a la pagina principal
        </a>
      </main>
    </ShopLayout>
  );
}

export default OrderResume;
