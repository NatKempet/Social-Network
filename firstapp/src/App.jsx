import "./ver1/homepage.css"; //  TODO Remove this line
import React from "react";
import { TweetProvider} from "./components/TweetContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginCard from "./components/LoginCard";
import Home from "./components/Home";
import Layout from "./components/Layout";

const App = () => {
  return (
    <TweetProvider>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>

              <Route index element={<Home />} />
              <Route path="/login" element={<LoginCard />} />



            </Route>
          </Routes>
        </BrowserRouter>
      </>
    </TweetProvider>
  );
};

export default App;
