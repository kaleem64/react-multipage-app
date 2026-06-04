import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About ShopHub</h3>
            <p className="text-gray-400">
              Your one-stop destination for amazing products. Quality and customer satisfaction guaranteed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
         <ul className="space-y-2 text-gray-400">
  <li>
    <Link to="/" className="hover:text-white transition">
      Home
    </Link>
  </li>

  <li>
    <Link to="/products" className="hover:text-white transition">
      Products
    </Link>
  </li>

  <li>
    <Link to="/about" className="hover:text-white transition">
      About Us
    </Link>
  </li>

  <li>
    <Link to="/contact" className="hover:text-white transition">
      Contact
    </Link>
  </li>
</ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📧 info@shophub.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 123 Main St, New York, NY 10001</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2024 ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
