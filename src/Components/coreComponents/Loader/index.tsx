import { Spinner } from "@nextui-org/react";

function Loader() {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <Spinner size="lg" />
    </div>
  );
}

export default Loader;
