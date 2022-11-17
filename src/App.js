import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import TableDetails from "./pages/TableDetails";
import Times from "./pages/Times";
import Table from "./pages/Table";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/times":
        title = "";
        metaDescription = "";
        break;
      case "/table":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<TableDetails />} />

      <Route path="/times" element={<Times />} />

      <Route path="/table" element={<Table />} />
    </Routes>
  );
}
export default App;
