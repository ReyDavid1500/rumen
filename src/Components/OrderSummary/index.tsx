import { useContext } from "react";
import { formatCurrency } from "../../assets/utils";
import Button from "../coreComponents/Button";
import { GoTrash } from "react-icons/go";
import {
  ShoppingCartContext,
  ShoppingCartContextType,
} from "../../context/ShoppingCartContext";

type OrderSummaryProps = {
  title: string;
  buttonText: string;
  route: string;
  handleShoppingCart?: () => void;
  containerStyles?: string;
};

function OrderSummary({
  title,
  buttonText,
  handleShoppingCart,
  route,
  containerStyles,
}: OrderSummaryProps) {
  const { shoppingCart, handlerDeleteProduct } = useContext(
    ShoppingCartContext
  ) as ShoppingCartContextType;

  return (
    <div
      className={`mt-6 md:mt-0 pb-6 px-5 md:px-0 h-[100%] z-0 ${containerStyles}`}
    >
      <div className="md:overflow-y-auto md:right-[48px] md:top-[95px] border-2 border-gray-400/50 rounded-lg p-4 xl:w-[350px] md:h-[78%] bg-white shadow-xl">
        <div className="flex flex-col gap-2 mb-4">
          <h2 className="text-xl text-center font-bold">{title}</h2>
          <table>
            <tbody>
              {shoppingCart?.products?.map((detail) => (
                <tr key={detail.id} className="border-b-2">
                  <td className="text-xs xl:text-lg">{detail.quantity}</td>
                  <td className="flex flex-row justify-between items-center">
                    <h3 className="text-xs xl:text-lg pt-6 pb-6">
                      {detail.name}
                    </h3>
                    <button
                      onClick={() => handlerDeleteProduct(detail.id)}
                      className="text-xs text-dark-blue font-bold"
                    >
                      <GoTrash className="w-4 h-4" />
                    </button>
                  </td>
                  <td className="text-xs xl:text-lg text-end">
                    {formatCurrency(detail.price * detail.quantity)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2 className="text-xs xl:text-lg text-center font-bold mb-4">
            TOTAL ESTIMADO
          </h2>
          <div className="flex flex-col gap-4 mb-4">
            <div className="flex flex-row justify-between text-xs xl:text-lg">
              <p>Subtotal</p>
              <span>{formatCurrency(Number(shoppingCart?.subtotal) || 0)}</span>
            </div>
            <hr />
            <div className="flex flex-row justify-between text-xs xl:text-lg">
              <p>Despacho</p>
              <span>{formatCurrency(Number(shoppingCart?.shipping) || 0)}</span>
            </div>
            <hr />
            <span className="text-end font-bold">
              {formatCurrency(Number(shoppingCart?.total) || 0)}
            </span>
          </div>
        </div>
        <div className="flex justify-center fixed bottom-0 right-[-6px] w-[100vw] z-10 bg-light-orange p-2 md:relative md:w-[100%] md:bg-inherit">
          <Button
            title={buttonText}
            route={route}
            onClick={handleShoppingCart}
          />
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
