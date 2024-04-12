"use client";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Leaders from "./pages/Leaders";
import Add from "./pages/Add";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Search" element={<Search />} />
          <Route path="Leaders" element={<Leaders />} />
          <Route path="Add" element={<Add/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
});

