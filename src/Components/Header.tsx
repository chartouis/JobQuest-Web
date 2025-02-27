import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm py-4 z-50">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-[#07273c] font-bold text-3xl">Job<span className="text-[#3fe881]">Quest</span></span>
        </div>
        <div className="flex space-x-6">
          <Link to="/" className="text-[#07273c] hover:text-[#3fe881] font-medium">Home</Link>
          <Link to="/career" className="text-[#07273c] hover:text-[#3fe881] font-medium">Careers</Link>
          <Link to="/game" className="text-[#07273c] hover:text-[#3fe881] font-medium">Games</Link>
          <Link to="https://github.com/chartouis" className="text-[#07273c] hover:text-[#3fe881] font-medium">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;