import { formatCurrency } from "../../assets/utils";
import Button from "../coreComponents/Button";

export interface DataProps {
  _id: number;
  name: string;
  description?: string;
  price: number;
  image: string;
  category?: string;
}

function Card(props: DataProps) {
  return (
    <div
      key={props._id}
      className="border-2 border-gray-400 rounded-lg overflow-hidden bg-white h-[350px] w-[267px] m-auto md:w-[280px]"
    >
      <div className="h-[67%] w-[100%]">
        <img
          className="w-full h-full object-cover "
          src={props.image}
          alt={props.name}
        />
      </div>
      <div className="p-2">
        <div className="flex flex-row justify-between">
          <div>
            <h3 className="font-bold text-sm">{props.name}</h3>
            <p className="text-xs">{props.description}</p>
          </div>
          <div>
            <h3 className="font-bold text-sm">{formatCurrency(props.price)}</h3>
            <p className="text-sm">Unidad</p>
          </div>
        </div>
        <div className="mt-4">
          <form className="flex flex-row justify-between items-center">
            <div>
              <input
                className="border-[3px] border-black rounded-lg w-[60px] h-[40px] mr-2 pl-2"
                type="text"
              />
              <label>Unidad</label>
            </div>
            <Button title="AGREGAR" route="/" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Card;
