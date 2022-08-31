import {useRoutes} from "react-router-dom";
import '@progress/kendo-theme-default/dist/all.css';
import routes from "./routes";
// import {} from 
import "./App.css";

function App() {
  const elements = useRoutes(routes);
  return elements;
}

export default App;
