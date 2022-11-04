import { UserProvider } from "./contexts/userContext/userContext";
import { RoutesMain } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <UserProvider>
      <ToastContainer autoClose={2000} />
      <RoutesMain />
    </UserProvider>
  );
}

export default App;
