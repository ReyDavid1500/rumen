import { BsChevronDoubleLeft } from "react-icons/bs";
import ShopLayout from "../../Components/ShopLayout";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function OrderResume() {
  const navigate = useNavigate();

  useEffect(() => {
    window.onpopstate = () => {
      navigate("/shopping");
    };
  });

  return (
    <ShopLayout>
      <main className="flex flex-col gap-10 items-center mt-20 pb-20 h-[100vh]">
        <p className="text-4xl text-center font-bold mt-20 mb-20 md:text-6xl">
          Gracias por tu compra!!
        </p>
        <a
          className="text-light-green font-bold cursor-pointer flex flex-raw gap-1 items-center"
          href="/shopping"
        >
          <span>
            <BsChevronDoubleLeft />
          </span>
          Volver a la pagina principal
        </a>
      </main>
    </ShopLayout>
  );
}

export default OrderResume;
