
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // or sessionStorage
    navigate("/login"); // redirect to login page
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
