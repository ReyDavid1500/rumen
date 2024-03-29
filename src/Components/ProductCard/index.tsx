import { formatCurrency } from "../../assets/utils";
import Button from "../coreComponents/Button";

type DataProps = {
  name: string;
  description?: string;
  price: number;
  image: string;
  category?: string;
  inStock?: boolean;
  handleProductQuantity?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNewProductToCart?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  dataId: string;
  inputDisabled?: boolean;
  addedToCart?: boolean;
  message?: any;
};

function ProductCard({
  name,
  description,
  price,
  image,
  handleNewProductToCart,
  handleProductQuantity,
  disabled,
  dataId,
  inputDisabled,
  addedToCart,
  message,
}: DataProps) {
  return (
    <div className="border-2 border-gray-400 rounded-lg overflow-hidden bg-white h-[340px] w-[267px] m-auto md:w-[280px]">
      <div className="h-[60%] w-[100%] relative">
        {addedToCart && (
          <div className="text-center font-medium text-white absolute w-full">
            {message}
          </div>
        )}
        <img
          className="w-full h-full object-cover"
          loading="lazy"
          src={image}
          alt={name}
        />
      </div>
      <div className="p-2">
        <div className="flex flex-row justify-between">
          <div>
            <h3 className="font-bold text-sm">{name}</h3>
            <p className="text-xs">{description}</p>
          </div>
          <div>
            <h3 className="font-bold text-sm">{formatCurrency(price)}</h3>
            <p className="text-sm">Unidad</p>
          </div>
        </div>
        <div className="mt-4">
          <form className="flex flex-row justify-between items-center">
            <div>
              <input
                className="border-[3px] border-black rounded-lg w-[60px] h-[40px] mr-2 pl-2"
                type="text"
                onChange={handleProductQuantity}
                disabled={inputDisabled}
              />
              <label>Unidad</label>
            </div>
            <Button
              title="AGREGAR"
              route=""
              onClick={handleNewProductToCart}
              data-id={dataId}
              disabled={disabled}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
