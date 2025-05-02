import Navigations from "./components/Navigations";
import { CryptoContextProvider } from "./context/crypto-context";
import AppLayout from "./pages/AppLayout";
import Settings from "./pages/Settings";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <CryptoContextProvider>
      <>
        <Navigations />
        <Routes>
          <Route path="/" element={<AppLayout />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </>
    </CryptoContextProvider>
  );
}
