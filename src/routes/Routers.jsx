import { Routes, Route } from "react-router-dom";
import Customization from "../pages/customization";
import Layout from "../pages/Layout";
import Spacing from "../pages/Spacing";
import Sizing from "../pages/Sizing";
import Typography from "../pages/Typography";
import Border from "../pages/Border";
import Table from "../pages/Table";
import Background from "../pages/Background";
import Frex from "../pages/Frex";
import Transition from "../pages/Transition";
import Transform from "../pages/Transform";
import Interactivity from "../pages/Interactivity";
import Home from "../components/Home";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customization" element={<Customization />} />
      <Route path="/layout" element={<Layout />} />
      <Route path="/spacing" element={<Spacing />} />
      <Route path="/sizing" element={<Sizing />} />
      <Route path="/typography" element={<Typography />} />
      <Route path="/border" element={<Border />} />
      <Route path="/table" element={<Table />} />
      <Route path="/background" element={<Background />} />
      <Route path="/frex" element={<Frex />} />
      <Route path="/transition" element={<Transition />} />
      <Route path="/transform" element={<Transform />} />
      <Route path="/interactivity" element={<Interactivity />} />
    </Routes>
  );
};

export default Routers;
