import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

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
        toast.success('Usuário efetuado com sucesso');
        history.push('/registration-complete');
      } else if (response.status === 400) {
        toast.error('Email já existente');
      } else {
        setError('Erro ao cadastrar, tente novamente.');
      }
    } catch (error) {
      setError('Erro ao cadastrar, tente novamente.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center custom-gradient">

      <div className="bg-white p-8 rounded-3xl shadow-md w-96 opacity-90">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Cadastre-se na <br />CG Meat
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 text-sm font-semibold mb-2">
              Nome
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Insira seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-800 text-sm font-semibold mb-2">
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Insira sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="cpf" className="block text-gray-800 text-sm font-semibold mb-2">
              CPF
            </label>
            <input
              type="cpf"
              id="cpf"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Digite seu CPF"
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

        <p className="mt-4 text-center text-gray-600">
          Já tem conta?{' '}
          <a href="/" className="text-custom hover:underline">
            Efetue login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
