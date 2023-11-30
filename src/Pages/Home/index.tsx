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
      <section className="content-section">
        <div className="text-[10vw] sm:text-[6vw] md:text-[4vw] p-3 font-medium mt-3 mb-3">
          <h1 className="text-center">
            "LA RECETA DE LA FELICIDAD <br /> LLEVA 12 HORAS DE AHUMADO."
          </h1>
        </div>
      </section>
    </main>
  );
}

export default Home;
