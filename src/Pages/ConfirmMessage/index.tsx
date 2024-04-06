function ConfirmMessage() {
  return (
    <div className="h-[100vh] bg-light-green/50 flex flex-col items-center justify-center">
      <img
        src="../../../public/rumen-logo.png"
        alt="Rumen Logo"
        height={300}
        width={300}
      />
      <div className="border-2 p-2 rounded-lg m-6">
        <p className="md:text-4xl text-xl text-white text-center">
          Gracias por Registrarte en Rumen, por favor ve a tu correo y confirma
          tu cuenta!
        </p>
      </div>
    </div>
  );
}

export default ConfirmMessage;
