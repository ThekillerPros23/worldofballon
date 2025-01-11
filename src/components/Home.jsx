import NavBar from "../layouts/NavBar";
import HomeInfo from "../layouts/HomeInfo";
import FooterComponent from "../layouts/FooterComponent";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <NavBar />

      {/* Contenido principal */}
      <main className="flex-grow">
        <HomeInfo />
      </main>

      {/* Footer siempre abajo */}
      <FooterComponent />
    </div>
  );
}

export default Home;
