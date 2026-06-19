import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import HotelSearchPage from "./pages/HotelSearchPage";
import DestinationSearchPage from "./pages/DestinationSearchPage";
import TransportSearchPage from "./pages/TransportSearchPage";
import HotelDetailPage from "./pages/HotelDetailPage";
import DestinationDetailPage from "./pages/DestinationDetailPage";

function App() {
  // hapus aja toLowerCase() kalau ga butuh, soalnya biar cepet aja Faishal ngecek nya
  const path = window.location.pathname.toLowerCase();

  if (path === "/login") return <LoginPage />;
  if (path === "/register") return <RegisterPage />;
  if (path === "/hotel-search") return <HotelSearchPage />;
  if (path === "/destination-search") return <DestinationSearchPage />;
  if (path === "/transport-search") return <TransportSearchPage />;
  if (path === "/hotel-detail") return <HotelDetailPage />;
  if (path === "/destination-detail") return <DestinationDetailPage />;

  return <HomePage />;
}

export default App;
