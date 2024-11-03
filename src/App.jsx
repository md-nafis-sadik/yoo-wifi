import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Router";

function App() {
  return (
    <div className="font-dmsans">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
