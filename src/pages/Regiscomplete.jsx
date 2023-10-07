import { useHistory } from 'react-router-dom';
import campina_meat from '../assets/background.png';

function Regiscomplete() {
  const history = useHistory();

  const handleLoginClick = () => {
    history.push('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center custom-gradient">
      <img src={campina_meat} alt="CG Meat" className="mb-4 w-54" />

      <div className="bg-white p-8 rounded-3xl shadow-md w-96 opacity-90">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Registro efetuado!
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Registrado com sucesso.
        </p>

        <button
          onClick={handleLoginClick}
          className="w-full bg-custom2 text-white rounded-2xl font-semibold py-2 px-4 hover:bg-darkGreen focus:outline-none focus:bg-darkGreen"
        >
          Voltar para o login
        </button>
      </div>
    </div>
  );
}

export default Regiscomplete;
