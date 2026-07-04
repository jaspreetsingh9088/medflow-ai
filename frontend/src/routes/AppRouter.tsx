import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return <h1>🚀 MedFlow AI</h1>;
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}