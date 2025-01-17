import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Asegúrate de tener react-router-dom configurado
import { auth } from '../auth/FirebaseAuth'; // Importa tu configuración de Firebase

function Dashboard() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    product: '',
  });
  const [user, setUser] = useState(null); // Para almacenar los detalles del usuario autenticado
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        // Si no está autenticado, redirige a la página principal
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleOrderSubmit = (event) => {
    event.preventDefault();

    if (!user) {
      alert('User is not authenticated');
      return;
    }

    const userEmail = user.email; // Obtenemos el correo del usuario autenticado
    alert(`Order placed successfully for ${orderDetails.name}. Confirmation sent to ${userEmail}`);
    // Aquí puedes llamar a tu API para registrar el pedido y enviar el correo
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>

      {/* Sección para subir imágenes */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Upload Image</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="block w-full text-sm text-gray-500
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-full file:border-0
                     file:text-sm file:font-semibold
                     file:bg-blue-50 file:text-blue-700
                     hover:file:bg-blue-100"
        />
        {selectedImage && (
          <div className="mt-4">
            <img src={selectedImage} alt="Uploaded" className="rounded-lg w-full object-cover" />
          </div>
        )}
      </div>

      {/* Sección para hacer pedidos */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Place Order</h2>
        <form onSubmit={handleOrderSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              required
              value={orderDetails.name}
              onChange={(e) => setOrderDetails({ ...orderDetails, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Product</label>
            <input
              type="text"
              required
              value={orderDetails.product}
              onChange={(e) => setOrderDetails({ ...orderDetails, product: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Product name or ID"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
