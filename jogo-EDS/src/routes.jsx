import { Route, Routes } from "react-router";
import App from "./App.jsx";
import Home from "./pages/index.jsx"
import { BrowserRouter } from "react-router-dom";
import Level1 from "./pages/level1";
const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />}/>
        <Route path="level1" element={<Level1/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;