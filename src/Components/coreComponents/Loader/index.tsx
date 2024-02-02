import { Spinner } from "@nextui-org/react";

function Loader({ className }: { className: string }) {
  return (
    <div className={className}>
      <Spinner size="lg" />
    </div>
  );
}

export default Loader;
