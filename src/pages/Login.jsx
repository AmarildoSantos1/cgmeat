import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import cgmeat from '../assets/background.png';
import loginService from '../services/loginService';

function Login() {
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};

    for (const [key, value] of formData) {
      data[key] = value;
    }

    try {
      const response = await loginService.login(data);
      if (response.ok) {
        const result = await response.json();
        localStorage.setItem("token", result["Access-Token"]);
        history.push("/home");
      } else {
        toast("Erro no login.");
      }
    } catch (err) {
      toast("Error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center custom-gradient">
      <img src={cgmeat} alt="CG MEAT" className="mb-4 w-54" />

      <div className="bg-white p-8 rounded-3xl shadow-md w-96 opacity-90">
        <h1 className="text-3xl font-semibold mb-6 text-center text-red-800">
          Bem-vindo à<br /> CG MEAT
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-red-800 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500"
              placeholder="Insira o email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-red-800 text-sm font-semibold mb-2">
              Senha
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500"
                placeholder="Insira a senha"
              />
              <span
                className="absolute top-2 right-2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? 'Ocultar' : 'Visualizar'} Senha
              </span>
            </div>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-2"
              />
              Deixar-me conectado
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-custom2 text-white rounded-2xl font-semibold py-2 px-4 hover:bg-darkRed focus:outline-none focus:bg-darkRed"
          >
            Logar
          </button>
        </form>
        <p className="mt-4 text-center text-red-600">
          Sem conta?{' '}
          <span
            className="text-darkRed cursor-pointer"
            onClick={() => history.push("/register")}
          >
            Registrar
          </span>
        </p>
        <p className="mt-2 text-center text-custom2">
          <span
            className="cursor-pointer"
            onClick={() => history.push("/forgot-password")}
          >
            Esqueceu a senha?
          </span>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
