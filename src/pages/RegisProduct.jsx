import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisProduct() {
  const history = useHistory();
  const [productData, setProductData] = useState({
    code: '',
    name: '',
    price: '',
    category: '',
    quantity: '',
    validity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await axios.post('http://localhost:3001/products', productData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      toast.success('Produto registrado com sucesso!', {
        position: toast.POSITION.TOP_CENTER,
      });

 
      setProductData({
        code: '',
        name: '',
        price: '',
        category: '',
        quantity: '',
        validity: '',
      });

    
      history.push('/home');
    } catch (error) {
      console.error('Erro produto:', error);
 
      toast.error('Erro produto.', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center custom-gradient">
      <div className="bg-white p-8 rounded-3xl shadow-md w-96 opacity-90">
        <h1 className="text-3xl font-semibold mb-6 text-center text-red-800">
          Registro de carne
        </h1>
        <button
          onClick={() => history.push('/home')} 
          className="absolute top-2 right-2 text-yellow-500 hover:text-yellow-600 focus:outline-none"
        >
          <FontAwesomeIcon icon={faHome} size="2x" />
        </button>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-red-700 text-sm font-bold mb-2">
              Código do Produto:
            </label>
            <input
              type="text"
              name="code"
              value={productData.code}
              onChange={handleChange}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-yellow-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-red-700 text-sm font-bold mb-2">
              Nome da carne:
            </label>
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleChange}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-yellow-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-red-700 text-sm font-bold mb-2">
              Preço:
            </label>
            <input
              type="text"
              name="price"
              value={productData.price}
              onChange={handleChange}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-yellow-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-red-700 text-sm font-bold mb-2">
              Categoria da carne:
            </label>
            <input
              type="text"
              name="category"
              value={productData.category}
              onChange={handleChange}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-yellow-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-red-700 text-sm font-bold mb-2">
              Quantidade:
            </label>
            <input
              type="text"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-yellow-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-red-700 text-sm font-bold mb-2">
              Validade:
            </label>
            <input
              type="text"
              name="validity"
              value={productData.validity}
              onChange={handleChange}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-yellow-300"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-500 text-white rounded-full font-semibold py-2 px-4 hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
            >
              Registrar carne
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RegisProduct;
