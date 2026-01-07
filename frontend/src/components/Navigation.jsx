import {useState, useEffect} from "react";
import {FaSearch, FaBell, FaBars} from "react-icons/fa";
import {useLocation, useNavigate} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [role, setRole] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  // Get role from localStorage on load
  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  // Common nav items
  const navItems = [
    {name: "Home", to: "home"},
    {name: "Jobs", to: "jobs"},
    {name: "Job Guiding", to: "guiding"},
    {name: "Our Blog", to: "blog"},
    {name: "Contact Us", to: "contact"},
  ];

  // Only admins see this dashboard link
  const adminNav = {name: "Dashboard", path: "/AdminDashboard"};

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    setRole(null);
    navigate("/");
  };

  // Render scroll or route link
  const renderNavLink = (item) =>
    isHomePage ? (
      <ScrollLink
        key={item.to}
        to={item.to}
        smooth={true}
        duration={700}
        offset={-60}
        className="hover:text-blue-400 text-black cursor-pointer">
        {item.name}
      </ScrollLink>
    ) : (
      <span
        key={item.to}
        onClick={() => navigate("/#" + item.to)}
        className="hover:text-blue-400 text-black cursor-pointer">
        {item.name}
      </span>
    );

  // Render dashboard route link
  const renderAdminNavLink = (item) => (
    <span
      key={item.path}
      onClick={() => navigate(item.path)}
      className="hover:text-blue-400 text-black cursor-pointer">
      {item.name}
    </span>
  );

  return (
    <>
      <nav className="bg-white shadow-md px-4 py-3 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="Logo.png" alt="Joblin" className="h-8" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 font-medium">
            {role === "ADMIN" && renderAdminNavLink(adminNav)}
            {navItems.map(renderNavLink)}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-6">
            {/* 🔵 Auth Button or Logout */}
            {role ? (
              <button
                onClick={handleLogout}
                className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded font-medium transition">
                Logout
              </button>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition">
                SIGN
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <FaBars className="text-2xl text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-2 text-center space-y-2">
            <div className="flex flex-col items-center space-y-2">
              {/* {renderNavLink({ name: "Home", to: "home" })} */}
              {role === "ADMIN" && renderAdminNavLink(adminNav)}
              {navItems.map(renderNavLink)}
            </div>

            <div className="flex items-center justify-center gap-4 px-4 mt-4">
              <FaSearch className="text-gray-600" />
              <FaBell className="text-gray-600" />
            </div>

            <div className="text-center">
              {role ? (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout();
                  }}
                  className="mt-2 px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded font-medium transition">
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setShowAuthModal(true);
                  }}
                  className="mt-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition">
                  SIGN
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => {
          setShowAuthModal(false);
          setRole(localStorage.getItem("role")); // Refresh role after auth
        }}
      />
    </>
  );
}
