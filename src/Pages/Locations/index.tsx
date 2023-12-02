import Layout from "../../Components/Layout";

function Locations() {
  return (
    <Layout>
      <div>
        <div className="bg-white w-[90%] h-auto m-auto mt-4 shadow-xl p-4 mb-4">
          <h1 className="text-3xl text-center">Puntos de Venta en Pucón</h1>
          <div className="mt-4 flex flex-col justify-center items-center p-4 gap-4 md:flex-row">
            <div className="md:w-[100%]">
              <img src="/local.JPG" alt="Local Volcán" />
            </div>
            <div className="m-auto">
              <p className="text-center font-bold text-2xl">
                Ven a vernos a nuestro local en camino al volcán Km 6, Pucón
                <br />
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/place/Rumen+Carnes+Ahumadas/@-39.3276261,-71.9800696,15.75z/data=!4m14!1m7!3m6!1s0x9614795b093cdbf3:0x674c4fb2d2978777!2sRumen+Carnes+Ahumadas!8m2!3d-39.3286427!4d-71.9751137!16s%2Fg%2F11s43n592h!3m5!1s0x9614795b093cdbf3:0x674c4fb2d2978777!8m2!3d-39.3286427!4d-71.9751137!16s%2Fg%2F11s43n592h?authuser=0&entry=ttu"
              >
                <img
                  className="hover:opacity-40 transition ease-out duration-1000"
                  src="/mapaRumen.png"
                  alt="Ruta Pucón-Rumen"
                />
                <p className="text-sm font-medium text-center">
                  Haz click sobre el mapa para obtener la ubicación
                </p>
              </a>
            </div>
          </div>
          <div className="mt-4 flex flex-col justify-center items-center p-4 gap-4 md:flex-row">
            <div className="md:w-[100%]">
              <img src="/foodtruck.jpeg" alt="Food Truck" />
            </div>
            <div className="m-auto">
              <p className="text-center font-bold text-2xl">
                Tambipen nos puedes visitar en nuestro fooftruck ubicado camino
                Inernacional
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/place/Rumen+Carnes+Ahumadas/@-39.3276261,-71.9800696,15.75z/data=!4m14!1m7!3m6!1s0x9614795b093cdbf3:0x674c4fb2d2978777!2sRumen+Carnes+Ahumadas!8m2!3d-39.3286427!4d-71.9751137!16s%2Fg%2F11s43n592h!3m5!1s0x9614795b093cdbf3:0x674c4fb2d2978777!8m2!3d-39.3286427!4d-71.9751137!16s%2Fg%2F11s43n592h?authuser=0&entry=ttu"
              >
                <img
                  className="hover:opacity-40 transition ease-out duration-1000"
                  src="/mapaRumen.png"
                  alt="Ruta Pucón-Rumen"
                />
                <p className="text-sm font-medium text-center">
                  Haz click sobre el mapa para obtener la ubicación
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Locations;
