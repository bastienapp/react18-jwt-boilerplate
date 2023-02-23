import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import { toast } from "react-toastify";

function Logout() {
  const navigate = useNavigate();

  function handleSubmit() {
    localStorage.removeItem("TOKEN");
    toast("Disconnected successfully");
    navigate("/");
  }

  return (
    <div className="Logout">
      <Navigation />

      <form>
        <button type="button" onClick={handleSubmit}>
          Disconnect
        </button>
      </form>
    </div>
  );
}

export default Logout;
