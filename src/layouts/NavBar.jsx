import { Navbar, Button } from "flowbite-react";
import image from "../../src/assets/worldofballonLogo.jpg";

function NavBar() {
  return (
    <Navbar
      className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg"
      fluid
      rounded
    >
      <Navbar.Brand href="/">
        <img
          src={image}
          className="h-10 w-10 rounded-full mr-3"
          alt="World of Balloons Panamá Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          World of Balloons Panamá
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          href="/"
          active={true}
          className="hover:text-gray-300 transition-colors"
        >
          Inicio
        </Navbar.Link>
        <Navbar.Link
          href="/productos"
          className="hover:text-gray-300 transition-colors"
        >
          Productos
        </Navbar.Link>
        <Navbar.Link
          href="/servicios"
          className="hover:text-gray-300 transition-colors"
        >
          Servicios
        </Navbar.Link>
        <Navbar.Link
          href="/contacto"
          className="hover:text-gray-300 transition-colors"
        >
          Contacto
        </Navbar.Link>
        <Navbar.Link
          href="/nosotros"
          className="hover:text-gray-300 transition-colors"
        >
          Nosotros
        </Navbar.Link>

        {/* Botón para versión móvil */}
        <Button
          href="/login"
          gradientDuoTone="purpleToBlue"
          className="block md:hidden mt-3"
        >
          Iniciar Sesión
        </Button>
      </Navbar.Collapse>

      {/* Botón para versión de escritorio */}
      <Button
        href="/login"
        gradientDuoTone="purpleToBlue"
        className="hidden md:block"
      >
        Iniciar Sesión
      </Button>
    </Navbar>
  );
}

export default NavBar;
