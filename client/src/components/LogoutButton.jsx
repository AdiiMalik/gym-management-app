import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // ✅ Clear all admin session data
    localStorage.removeItem("token");
    localStorage.removeItem("adminName");
    
    // ✅ Navigate to login page
    navigate("/");

    // ✅ Force reload to ensure header/sidebar updates
    window.location.reload();
     console.log("✅ Logout triggered");
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



