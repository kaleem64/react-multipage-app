import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const fetchProductDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(response.data);
      setError(null);
    } catch (err) {
      setError('Product not found or failed to load.');
      console.error('Error fetching product details:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error || 'Product not found'}
        </div>
        <button
          onClick={() => navigate('/products')}
          className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button
        onClick={() => navigate('/products')}
        className="mb-6 text-purple-600 hover:text-purple-800 flex items-center gap-2"
      >
        ← Back to Products
      </button>

      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-96 object-contain"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">
              {product.title}
            </h1>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-500">
                {'★'.repeat(Math.round(product.rating?.rate || 0))}
                {'☆'.repeat(5 - Math.round(product.rating?.rate || 0))}
              </div>
              <span className="ml-2 text-gray-600">
                ({product.rating?.count || 0} reviews)
              </span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {product.description}
            </p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-purple-600">
                ${product.price}
              </span>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Category:</h3>
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                {product.category}
              </span>
            </div>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition w-full md:w-auto">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;