function Home() {
  return (
    <main>
      <div className="overflow-hidden max-h-[500px]">
        <img
          src="/Rumen-15.jpg"
          alt="Rumen Principal"
          className="w-full h-auto"
        />
      </div>
      <section className="content-section mb-6 flex flex-col items-center">
        <div className="text-[10vw] sm:text-[6vw] md:text-[4vw] p-3 font-medium mt-3 mb-3">
          <h1 className="text-center text-4xl sm:text-6xl xl:text-7xl">
            "LA RECETA DE LA FELICIDAD <br /> LLEVA 12 HORAS DE AHUMADO."
          </h1>
        </div>
        <div>
          <p className="text-xl md:text-2xl font-buttons text-gray-400 ml-[10rem] sm:ml-[34rem]">
            El Pitmaster
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
