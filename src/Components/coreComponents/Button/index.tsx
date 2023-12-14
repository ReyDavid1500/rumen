import { Link } from "react-router-dom";

function Button({
  title,
  route,
  target,
}: {
  title: string;
  route: string;
  target?: string;
}) {
  return (
    <div className="bg-rumen-orange hover:bg-rumen-orange/60 text-white font-bold p-2 rounded-md w-fit">
      <Link target={target} rel="noreferrer" to={route}>
        {title}
      </Link>
    </div>
  );
}

export default Button;
