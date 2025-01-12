import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/FirebaseAuth";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Mantener al usuario autenticado
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        navigate("/"); // Redirige al usuario autenticado al inicio
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe(); // Limpieza del listener
  }, [navigate]);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirigir al inicio tras login
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/"); // Redirigir al inicio tras login con Google
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/login"); // Redirigir al login tras cierre de sesión
    } catch (err) {
      setError(err.message);
    }
  };

  if (user) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-bold text-gray-700">Welcome, {user.email}</h2>
        <button
          onClick={handleSignOut}
          className="mt-4 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <p className="text-sm text-center text-gray-600">Access your account</p>
        {error && (
          <div className="text-red-500 text-sm mt-2 text-center">{error}</div>
        )}
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg mt-4"
        >
          <svg
            className="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.4 0 6.5 1.3 8.9 3.4l6.7-6.7C34.8 2.1 29.7 0 24 0 14.3 0 6.2 5.9 2.5 14.3l7.8 6.1C12.5 13.4 17.8 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.4 24.5c0-1.6-.2-3.1-.5-4.5H24v9h12.8c-.5 2.6-2 4.8-4.1 6.2v5h6.6c3.9-3.6 6.1-8.9 6.1-15.7z"
            />
            <path
              fill="#FBBC05"
              d="M10.3 27.6c-.6-1.6-.9-3.4-.9-5.1s.3-3.5.9-5.1l-7.8-6C.9 15.1 0 19.4 0 24c0 4.6.9 8.9 2.6 12.6l7.7-6c-.6-1.7-.9-3.5-.9-5.1z"
            />
            <path
              fill="#34A853"
              d="M24 48c5.9 0 10.9-2 14.5-5.4l-7.1-5.5c-2 1.4-4.5 2.3-7.4 2.3-6.1 0-11.3-4-13.2-9.4l-7.8 6c3.6 8.3 11.6 14 20.9 14z"
            />
          </svg>
          Login with Google
        </button>
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-4 text-gray-600 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <form onSubmit={handleEmailLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg"
          >
            Login with Email
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
