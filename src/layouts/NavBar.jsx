import { Navbar, Button, Dropdown, Avatar } from "flowbite-react";
import image from "../../src/assets/worldofballonLogo.jpg";
import { auth } from "../auth/FirebaseAuth";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Actualiza el estado del usuario
    });

    return () => unsubscribe(); // Limpia el listener
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null); // Resetea el estado del usuario
      navigate("/login"); // Redirige al login tras cerrar sesión
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

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
      <div className="flex items-center space-x-4">
        {/* Menú principal */}
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
        </Navbar.Collapse>

        {/* Si el usuario está autenticado, muestra el avatar con dropdown */}
        {user ? (
          <Dropdown
            arrowIcon={true}
            inline={true}
            label={
              <Avatar
                img={user.photoURL || "https://via.placeholder.com/150"}
                rounded={true}
                className="h-10 w-10"
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user.displayName || "Usuario"}</span>
              <span className="block truncate text-sm font-medium">
                {user.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item onClick={() => navigate("/dashboard")}>
              Dashboard
            </Dropdown.Item>
            <Dropdown.Item onClick={handleSignOut}>Sign Out</Dropdown.Item>
          </Dropdown>
        ) : (
          // Si no está autenticado, muestra el botón de "Iniciar Sesión"
          <Button
            href="/login"
            gradientDuoTone="purpleToBlue"
            className="hidden md:block"
          >
            Iniciar Sesión
          </Button>
        )}
      </div>
    </Navbar>
  );
}

export default NavBar;
