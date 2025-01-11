import { Footer } from "flowbite-react";
import image from "../../src/assets/worldofballonLogo.jpg";

function FooterComponent() {
  return (
    <Footer container className="bg-gray-900 text-white py-8">
      <div className="w-full max-w-7xl mx-auto text-center px-6">
        {/* Sección superior con logo y enlaces */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          {/* Logo de la empresa */}
          <div className="flex items-center mb-4 sm:mb-0">
            <img
              src={image}
              alt="World of Balloons Panamá Logo"
              className="h-12 w-12 mr-3 rounded-full"
            />
            <span className="text-lg font-bold">World of Balloons Panamá</span>
          </div>

          {/* Grupo de enlaces */}
          <Footer.LinkGroup className="space-x-4">
            <Footer.Link
              href="https://www.instagram.com/worldofballoons_pa/"
              target="_blank"
              className="hover:underline"
            >
              Instagram
            </Footer.Link>
            <Footer.Link href="#" className="hover:underline">
              Política de Privacidad
            </Footer.Link>
            <Footer.Link href="#" className="hover:underline">
              Términos de Uso
            </Footer.Link>
            <Footer.Link href="#" className="hover:underline">
              Contáctanos
            </Footer.Link>
          </Footer.LinkGroup>
        </div>

        {/* Divider */}
        <Footer.Divider className="border-gray-700" />

        {/* Derechos reservados */}
        <Footer.Copyright
          href="https://www.instagram.com/worldofballoons_pa/"
          by="World of Balloons Panamá™"
          year={2025}
          className="mt-4 text-sm"
        />
      </div>
    </Footer>
  );
}

export default FooterComponent;
