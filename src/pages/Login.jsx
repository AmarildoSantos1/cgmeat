import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
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
        toast("Verifique suas credenciais.");
      }
    } catch (err) {
      toast("Erro desconhecido");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center custom-gradient">
      <img src={blessbasket} alt="Bless Basket" className="mb-4 w-54" />

      <div className="bg-white p-8 rounded-3xl shadow-md w-96 opacity-90">
        <h1 className="text-3xl font-semibold mb-6 text-center text-green-800">
          Bem-vindo à<br /> Campina Meat
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
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Digite seu email"
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
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Digite sua senha"
              />
              <span
                className="absolute top-2 right-2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? 'Ocultar' : 'Mostrar'} Senha
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
              Salvar login
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-custom2 text-white rounded-2xl font-semibold py-2 px-4 hover:bg-darkBlue focus:outline-none focus:bg-darkBlue"
          >
            Entrar
          </button>
        </form>
        <p className="mt-4 text-center text-green-600">
          Não tem uma conta?{' '}
          <a href="/register" className="text-darkGreen hover:underline">
            Registrar
          </a>
        </p>
        <p className="mt-2 text-center text-custom2">
          <a href="/forgot-password" className="hover:underline">
            Esqueceu a senha?
          </a>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
