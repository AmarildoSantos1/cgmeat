import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import cgmeat from '../assets/background.png';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCPF] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:3001/createuser', {
        name,
        email,
        password,
        cpf
      });

      if (response.status === 201) {
        toast.success('Usuário criado');
        history.push('/registration-complete');
      } else if (response.status === 400) {
        toast.error('Email existente');
      } else {
        setError('Erro, tente novamente.');
      }
    } catch (error) {
      setError('Erro, tente novamente.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center custom-gradient">
      <img src={cgmeat} alt="CGMEAT" className="mb-4 w-54" />

      <div className="bg-white p-8 rounded-3xl shadow-md w-96 opacity-90">
        <h1 className="text-3xl font-semibold mb-6 text-center text-red-800">
          Cadastre-se com a <br />CG MEAT
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-red-800 text-sm font-semibold mb-2">
              Nome
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500"
              placeholder="Insira seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-red-800 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500"
              placeholder="Insira o email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-red-800 text-sm font-semibold mb-2">
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500"
              placeholder="Insira a senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="cpf" className="block text-red-800 text-sm font-semibold mb-2">
              CPF
            </label>
            <input
              type="cpf"
              id="cpf"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500"
              placeholder="Insira o CPF"
              value={cpf}
              onChange={(e) => setCPF(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-custom2 text-white rounded-2xl font-semibold py-2 px-4 hover:bg-custom focus:outline-none focus:bg-custom"
          >
            Cadastrar
          </button>
        </form>

        {error && <p className="mt-4 text-center text-red-500">{error}</p>}

        <p className="mt-4 text-center text-red-600">
          Tem uma conta?{' '}
          <span
            className="text-custom cursor-pointer"
            onClick={() => history.push("/")}
          >
            Efetue login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
