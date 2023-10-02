import { TweetProvider, TweetContext } from "./components/TweetContext";
import "./App.css";

// TODO make React Router work
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Missing from "./pages/Missing";

const App = () => {
  return (
    <TweetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TweetProvider>
  );
};

export default App;
