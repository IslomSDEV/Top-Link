import React from "react";
import { Route, Routes } from "react-router-dom";
import FeatureCollector from "./FeatureCollector";
import HomeCollector from "./HomeCollector";
import Faq from "./InfoPages/Faq/Faq";
import Prives from "./InfoPages/Prives/Prives";
import Teamserv from "./InfoPages/Teamserv/Teamserv";
import Layouts from "./Layouts/Layouts";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Registor/Registor";
import WorkerCollector from "./WorkerCollector";

function App() {
  return (
    <>
      <Layouts>
        <Routes>
          <Route path="/" element={<HomeCollector />} />
          <Route path="/workpage" element={<WorkerCollector />} />
          <Route path="/featurepage" element={<FeatureCollector />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/teamofservice" element={<Teamserv />} />
          <Route path="/privespolicy" element={<Prives />} />
          <Route path="/sign_up-page" element={ <SignUp /> } />
          <Route path="/loginpage" element={<Login />} />
        </Routes>
      </Layouts>
    </>
  );
}

export default App;
