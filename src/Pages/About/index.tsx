import Layout from "../../Components/Layout";

function About() {
  return (
    <Layout>
      <div className="pt-10 pb-10">
        <article className="p-10 bg-white w-[80vw] m-auto">
          <h2 className="text-center text-2xl md:text-3xl font-medium mb-6">
            Conoce al Equipo de Rumen
          </h2>
          <div className="flex flex-col items-center gap-6">
            <img
              className="w-[100%] md:w-[90%] xl:w-[80%] h-auto"
              src="/equipoRumen.JPG"
              alt="Familia Rumen"
            />
            <p className="text-justify text-sm md:text-xl">
              Somos un Restaurante de Carnes Ahumadas ubicado camino al volcán
              Km 6, Pucón. En nuestro local nos especializamos en carnes de
              vacuno, cerdo, pavo y pollo combinado con platos tradicionales
              chilenos y venezolanos, con una oferta importante de aternativas
              sin gluten. Contamos con 2 ahumadores con una capacidad total de
              150 kg. Para nuestros ahumados utilizamos madera nativa de
              manzano, ciruelo y Ulmo lo que le agrega un sabor especial a las
              carnes. Nuestros productos estan 100 % cocidos y se venden
              sellados al vacío y congelados. Lo que permite mantener el sabor y
              los jugos de la carne intactos por mucho tiempo. Además la forma
              de calentar es muy sencilla, sólo debe retirar la etiqueta de
              cartón, introducir la bolsa en agua hirviendo, esperar 10 a 15
              minutos, abrir la bolsa, servir el producto con sus jugos y
              disfrutar.
            </p>
          </div>
        </article>
      </div>
    </Layout>
  );
}

export default About;
