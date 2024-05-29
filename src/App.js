import "./App.css";
import "./responsive.css";
import "./responsive1.css";
import "./App1.css";
import "./responsivetab1.css";
// import Aos from "aos";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import DailyProgram from "./pages/dailyprogram/DailyProgram";
import History from "./pages/history/History";
import { AdhocCommittee } from "./pages/AdhocCommittee";
import Regulations from "./pages/Regulations";
import Resolution from "../src/pages/Resolution/Resolution"
import TheTemple from "./pages/TheTemple";
import PlacesAroundShirdi from "./pages/PlacesAroundShirdi";
import Gallery from "./pages/PhotoGallery";
import Saicharita from "./pages/saicharita/Saicharita";
import SaileelaMag from "./pages/saileelaMag/SaileelaMag";
import AnnualReports from "./pages/Annual Reports/AnnualReports";
import Festival from "./pages/Festival";

// import Regulations from "./pages/Regulations";

// import { AdhocCommittee } from "./pages/AdhocCommittee";
// import Regulations from "./pages/Regulations";
// import History from "./pages/history/History"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dailyprogram" element={<DailyProgram />} />
        <Route path="/ad-hoc-committee" element={<AdhocCommittee />} />
        <Route path="/sanathan-regulation" element={<Regulations />} />

        <Route path="/history" element={<History />} />

        <Route path="/resolution" element={<Resolution />} />
        <Route path="/the-temple" element={<TheTemple />} />
        <Route path="/placetovisit" element={<PlacesAroundShirdi/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/saicharita" element={<Saicharita/>} />
        <Route path="/saileelamag" element={<SaileelaMag/>} />
        <Route path="/annualreports" element={<AnnualReports/>} />
        <Route path="/festival" element={<Festival/>} />

        

      </Routes>
    </div>
  );
}

export default App;


