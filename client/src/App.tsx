import { useRoutes } from "react-router-dom";
import IssuesPage from "./pages/IssuesPage";

import "./App.css";

const App = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <IssuesPage />,
    },
  ]);

  return <>{element}</>;
};

export default App;
