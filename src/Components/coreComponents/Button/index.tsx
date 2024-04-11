import { Link } from "react-router-dom";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  title: string;
  route?: string;
  target?: string;
  styles?: string;
};

function Button({ title, route, target, styles, ...rest }: ButtonProps) {
  return (
    <button
      className={`bg-rumen-orange hover:bg-rumen-orange/60 text-white font-bold p-2 rounded-md w-fit ${styles}`}
      {...rest}
    >
      <Link target={target} rel="noreferrer" to={route || ""}>
        {title}
      </Link>
    </button>
  );
}

export default Button;
