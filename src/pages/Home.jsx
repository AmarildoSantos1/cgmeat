import { faSignOutAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function Home() {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');
  const [productToDelete, setProductToDelete] = useState(null);

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/products', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      setProducts(response.data);
    } catch (err) {
      console.error(err);
      setMessage("erro ao buscar os produtos.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  const handleGoToProductPage = () => {
    history.push("/product-registration");
  };

  const openDeleteConfirmationModal = (product) => {
    setProductToDelete(product);
  };

  const closeDeleteConfirmationModal = () => {
    setProductToDelete(null);
  };

  const deleteProduct = async (product) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          name: product.name,
        },
      };

      const response = await axios.delete(`http://localhost:3001/delete/product/name`, config);

      if (response.status === 204) {
        setProducts((prevProducts) => prevProducts.filter((p) => p.name !== product.name));
        closeDeleteConfirmationModal();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const confirmDeleteProduct = () => {
    if (productToDelete) {
      deleteProduct(productToDelete);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/");
    } else {
      getProducts();
    }
  }, [history]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center custom-gradient">
      <div className="bg-white p-8 rounded-3xl shadow-md w-96 opacity-90">
        <img src={shopeople} alt="CG MEAT" className="mb-4 w-54" />

        <h1 className="text-3xl font-semibold mb-6 text-center text-red-800">
          Produtos do Acougue
        </h1>

        {message && <p className="text-red-500 mb-4 text-center">{message}</p>}

        {products.length === 0 ? (
          <p className="text-center text-red-600">
            Adicione produtos!
          </p>
        ) : (
          <div className="mb-8">
            {products.map((product) => (
              <div key={product.id} className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-red-600">Preço: R$ {product.price}</p>
                  <p className="text-red-600">Validade: {product.validity}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => openDeleteConfirmationModal(product)}
                    className="bg-red-500 text-white rounded-full font-semibold py-2 px-3 hover:bg-red-600 focus:outline-none focus:bg-red-600"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={handleLogout}
          className="absolute top-2 right-2 text-red-500 hover:text-red-600 focus:outline-none"
        >
          <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
        </button>

        <button
          onClick={handleGoToProductPage}
          className="w-full bg-custom2 text-white rounded-2xl font-semibold py-2 px-4 hover:bg-darkRed focus:outline-none focus:bg-darkRed"
        >
          Cadastro de carnes
        </button>
      </div>
      <ToastContainer />

      {productToDelete && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md w-96">
            <p className="mb-4 text-center">excluir o produto?</p>
            <div className="flex justify-center">
              <button
                onClick={confirmDeleteProduct}
                className="bg-red-500 text-white rounded-full font-semibold py-2 px-3 mr-2 hover:bg-red-600 focus:outline-none focus:bg-red-600"
              >
                Confirmar
              </button>
              <button
                onClick={closeDeleteConfirmationModal}
                className="bg-yellow-500 text-white rounded-full font-semibold py-2 px-3 hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
