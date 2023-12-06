export interface DataProps {
  id: number;
  images: string;
  title: string;
  description: string;
  price: number;
}

function Card(props: DataProps) {
  return (
    <div
      key={props.id}
      className="border-2 border-gray-400 rounded-lg overflow-hidden bg-white h-[350px] w-[267px] m-auto md:w-[280px]"
    >
      <div className="h-[67%] w-[100%]">
        <img
          className="w-full h-full object-cover "
          src={props.images}
          alt={props.title}
        />
      </div>
      <div className="p-2">
        <div className="flex flex-row justify-between">
          <div>
            <h3 className="font-bold text-sm">{props.title}</h3>
            <p className="text-sm">{props.description}</p>
          </div>
          <div>
            <h3 className="font-bold text-sm">${props.price}</h3>
            <p className="text-sm">Unidad</p>
          </div>
        </div>
        <div className="mt-4">
          <form className="flex flex-row justify-between">
            <div>
              <input
                className="border-[3px] border-black rounded-lg w-[60px] h-[40px] mr-2"
                type="text"
              />
              <label>Unidad</label>
            </div>
            <button className="bg-orange-500/80 hover:bg-orange-500 text-white font-bold p-2 rounded-md w-fit">
              AGREGAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Card;
