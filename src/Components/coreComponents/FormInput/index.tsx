import { ChangeEvent, useState } from "react";
import { UseFormRegister } from "react-hook-form";

type FormInputProps = {
  placeholder: string;
  type: string;
  id: string;
  name: string;
  register: UseFormRegister<any>;
  handlerChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

function FormInput({
  placeholder,
  type,
  id,
  name,
  register,
  handlerChange,
}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-row w-full gap-2 items-center border-2 border-gray-200 rounded-lg focus:border-rumen-orange px-2">
      <input
        className="w-full m-2 outline-none"
        placeholder={placeholder}
        type={
          (placeholder === "Contraseña" ||
            placeholder === "Confirma tu contraseña") &&
          !showPassword
            ? type
            : "text"
        }
        id={id}
        {...register(name)}
        name={name}
        onChange={handlerChange}
      />
      {(placeholder === "Contraseña" ||
        placeholder === "Confirma tu contraseña") && (
        <button
          onClick={(e) => e.preventDefault()}
          onPointerDown={() => setShowPassword(true)}
          onPointerUp={() => setShowPassword(false)}
        >
          <img
            src={!showPassword ? "/eye.png" : "/eyeHide.png"}
            alt="eye"
            className="h-8 w-8 text-black"
          />
        </button>
      )}
    </div>
  );
}

export default FormInput;
