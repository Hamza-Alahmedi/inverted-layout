import { useRoutes } from "react-router-dom";
import "./App.css";
import { mainRoutes } from "./routes/routes";

function App() {
  const routes = useRoutes(mainRoutes);
  return <>{routes}</>;
}

export default App;