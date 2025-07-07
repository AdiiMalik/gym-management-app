import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");          // ✅ clear token
    localStorage.removeItem("adminEmail");     // ✅ clear admin email
    navigate("/login");                        // ✅ redirect to login page
    window.location.reload();                  // ✅ force reload so header updates
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-600 text-white py-1.5 px-4 rounded transition-colors"
    >
      Logout
    </button>
  );
};

export default LogoutButton;

// import { useNavigate } from "react-router-dom";

// const handleLogout = () => {
//   localStorage.removeItem("token");
//   window.location.href = "/login"; // direct reload works globally
// };

// export default { handleLogout };
