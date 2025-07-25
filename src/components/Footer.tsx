import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-qb-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/qb_logo.png" 
                alt="QB Logo" 
                className="w-10 h-10"
              />
              <span className="text-white font-bold text-xl">Quant Basket</span>
            </div>
            <p className="text-gray-300 mb-4">
              Revolutionary platform for community-based tokenization, quantitative strategies, 
              and impact investing powered by advanced financial engineering.
            </p>
            <div className="text-sm text-gray-400">
              <p>A HoneyJa Company</p>
              <p>© 2024 Quant Basket. All rights reserved.</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-qb-green transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-qb-green transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-qb-green transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-300 hover:text-qb-green transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-qb-green transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-300 hover:text-qb-green transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Community Tokens</li>
              <li className="text-gray-300">Impact Coins</li>
              <li className="text-gray-300">Quant Strategies</li>
              <li className="text-gray-300">Tokenised Portfolios</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Empowering the future of decentralized finance through quantitative innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;