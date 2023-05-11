import { SharedLayout } from "./routes";
import { HomePage } from "./pages";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* RENDERS THE SHARED LAYOUT OF THE MAIN PAGE */}
        <Route element={<SharedLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
