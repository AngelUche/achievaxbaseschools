import { SharedLayout } from "./routes";
import { HomePage } from "./pages";
import { NavBarContextProvider } from "./context/NavigationContet";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <NavBarContextProvider>
      <BrowserRouter>
        <Routes>
          {/* RENDERS THE SHARED LAYOUT OF THE MAIN PAGE */}
          <Route element={<SharedLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NavBarContextProvider>
  );
}

export default App;
