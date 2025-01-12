import { Button } from "flowbite-react";
import image from "../../src/assets/image.svg";
import image1 from "../../src/assets/camisaPerzonalida.jpg";
import image2 from "../../src/assets/decoracionPerzonalizada.jpg";
import image3 from "../../src/assets/tazaPerzonalizada.jpg";

function HomeInfo() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex items-center justify-center bg-black bg-opacity-70 py-12 px-4 md:px-8">
        <div className="text-center max-w-5xl w-full space-y-12">
          {/* Título principal */}
          <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            World of Balloons Panamá
          </h1>

          {/* Descripción */}
          <p className="text-white text-lg md:text-xl font-light">
            Transformamos tus eventos en experiencias inolvidables con nuestras
            decoraciones únicas y productos personalizados.
          </p>

          {/* Botones */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              gradientDuoTone="cyanToBlue"
              href="/register"
              className="font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              gradientDuoTone="greenToBlue"
              className="font-semibold shadow-lg hover:scale-105 transition-transform"
              href="https://www.instagram.com/worldofballoons_pa/"
              target="_blank"
            >
              Visítanos en Instagram
            </Button>
          </div>

          {/* Tarjetas de servicios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-90 rounded-lg shadow-xl overflow-hidden transition-transform hover:scale-105">
              <img
                src={image2}
                alt="Decoración de cumpleaños"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Decoraciones de Cumpleaños
                </h3>
                <p className="text-gray-600 text-sm">
                  Diseños personalizados para los cumpleaños más especiales.
                </p>
              </div>
            </div>
            <div className="bg-white bg-opacity-90 rounded-lg shadow-xl overflow-hidden transition-transform hover:scale-105">
              <img
                src={image1}
                alt="Camiseta personalizada"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Camisetas Personalizadas
                </h3>
                <p className="text-gray-600 text-sm">
                  Crea tu propia camiseta con diseños únicos y personalizados.
                </p>
              </div>
            </div>
            <div className="bg-white bg-opacity-90 rounded-lg shadow-xl overflow-hidden transition-transform hover:scale-105">
              <img
                src={image3}
                alt="Taza personalizada"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Tazas Personalizadas
                </h3>
                <p className="text-gray-600 text-sm">
                  Diseña tazas únicas para regalar o disfrutar en casa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeInfo;
