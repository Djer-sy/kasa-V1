import { RouterProvider } from "react-router-dom";
import { router } from "./compenents/routes/router";

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;