import { Link } from "react-router-dom";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  title: string;
  route: string;
  target?: string;
};

function Button({ title, route, target, ...rest }: ButtonProps) {
  return (
    <div className="bg-rumen-orange hover:bg-rumen-orange/60 text-white font-bold p-2 rounded-md w-fit">
      <button {...rest}>
        <Link target={target} rel="noreferrer" to={route}>
          {title}
        </Link>
      </button>
    </div>
  );
}

export default Button;
