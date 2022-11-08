import { UserProvider } from "./contexts/userContext/userContext";
import { RoutesMain } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SearchProvider } from "./contexts/searchContext/searchContext";

function App() {
  return (
    <>
      <UserProvider>
        <SearchProvider>
          <ToastContainer autoClose={2000} />
          <RoutesMain />
        </SearchProvider>
      </UserProvider>
    </>
  );
}

export default App;
