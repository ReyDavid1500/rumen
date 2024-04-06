import { useEffect, useState } from "react";
import { useAxios } from "../../hooks/useAxios";
import Button from "../../Components/coreComponents/Button";
import { useSearchParams } from "react-router-dom";
import Loader from "../../Components/coreComponents/Loader";

function ConfirmButton() {
  const [isLoading, setIsLoading] = useState(false);

  const { requester } = useAxios();

  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");

  useEffect(() => {
    try {
      setIsLoading(true);
      const activateUser = async () => {
        await requester.get("/users/activate/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      };
      activateUser();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader className="h-[100vh] flex justify-center items-center bg-light-green" />
      ) : (
        <div className="h-[100vh] flex flex-col gap-6 justify-center items-center bg-light-green/50">
          <img
            src="../../../public/rumen-logo.png"
            alt="Rumen Logo"
            height={300}
            width={300}
          />
          <p className="text-white text-2xl font-medium text-center">
            Tu cuenta ha sido verificada ya puedes ingresar...
          </p>
          <Button title="Vuelve al Login" route="/shopping" />
        </div>
      )}
    </>
  );
}

export default ConfirmButton;
