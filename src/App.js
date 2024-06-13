import "./App.css";
import "./responsive.css";
import "./responsive1.css";
import "./App1.css";
import "./responsivetab1.css";
// import Aos from "aos";
import { Route, Routes , Navigate} from "react-router-dom";
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
import Puja from "./pages/Puja";
import Appeal from "./pages/Appeal";
import Donation from "./pages/Donation/Donation";
import EmergencyHelpline from "./pages/HelplineNo/EmergencyHelpline";
import Notice from "./pages/Notice/Notice";
import Recruitment from "./pages/Recruitment/Recruitment";
import Layout from "./pages/Accomodation/Layout";
import Non from "./pages/Accomodation/non";
import Acc from "./pages/Accomodation/acc";
import General from "./pages/Accomodation/general";
import Reach_layout from "./pages/How_To_Reach/Reach_layout"
import Bus from "./pages/How_To_Reach/bus";
import Arrival from "./pages/How_To_Reach/arrivals";
import Train from "./pages/How_To_Reach/train";
import Air from "./pages/How_To_Reach/air";

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
        <Route path="/pooja" element={<Puja/>} />
        <Route path="/appeal" element={<Appeal/>} />
        <Route path="/donation" element={<Donation/>} />
        <Route path="/helplineNo" element={<EmergencyHelpline/>} />
        <Route path="/notice" element={<Notice/>} />
        <Route path="/recruitment" element={<Recruitment/>} />

        
        <Route path="/accomodation" element={<Layout />} />
        <Route
          path="/non-ac"
          element={
            <Layout>
              <Non />
            </Layout>
          }
        />

        <Route
          path="/general"
          element={
            <Layout>
              <General  />
            </Layout>
          }
        />
     <Route path="" element={<Navigate to="/general" />} />

        <Route
          path="/ac"
          element={
            <Layout>
              <Acc />
            </Layout>
          }
        />
         <Route path="/howtoreach" element={<Reach_layout/>}/>
      <Route path="/bus" element={<Reach_layout><Bus/></Reach_layout>}/>
      <Route path="/air" element={<Reach_layout><Air/></Reach_layout>}/>
      <Route path="/arrival" element={<Reach_layout><Arrival/></Reach_layout>}/>
      <Route path="/train" element={<Reach_layout><Train/></Reach_layout>}/>

      </Routes>
    </div>
  );
}

export default App;


