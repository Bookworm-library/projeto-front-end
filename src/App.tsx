import { UserProvider } from "./contexts/userContext";
import { RoutesMain } from "./routes";

function App() {
  return (
    <UserProvider>
      <RoutesMain />
    </UserProvider>
  );
}

export default App;
