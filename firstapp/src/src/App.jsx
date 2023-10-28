import "./ver1/homepage.css"; //  TODO Remove this line
import React, { useState, useEffect } from "react";
import spider from "./ver1/spider.png";
import { TweetProvider, TweetContext } from "./components/TweetContext";
import TweetList from "./components/tweetList";
import AddTweet from "./components/AddTweet";
import DeleteButton from "./components/DeleteButton";
import { db } from "./Firebase/firebase";
import {
  collection,
  onSnapshot,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import { Auth } from "./components/Auth";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
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
