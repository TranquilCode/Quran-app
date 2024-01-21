import "./components/ButtonComponent";
import { library } from "@fortawesome/fontawesome-svg-core";
import Navbar from "./components/Navbar";
import "animate.css";
import "./components/firebase";
import {
  faBars,
  faPhone,
  faLanguage,
  faArrowCircleDown,
  faArrowCircleRight,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faBars,
  faPhone,
  faLanguage,
  faArrowCircleDown,
  faArrowCircleRight,
  faEnvelope
);

import { Routes, Route } from "react-router-dom";
import QuranPage from "./components/QuranPage";
import { HomePage } from "./components/HomePage";
import QuranDetails from "./components/QuranDetails";
import Reciters from "./components/Reciters"

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quran" element={<QuranPage />} />
        <Route path="/surah/:id" Component={QuranDetails} />
        {/* <Route path="/" element={<Cards />} /> */}
      </Routes>
      <Reciters />
    </div>
  );
}

export default App;
