import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Video from "./pages/Video";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videos/:videoId" element={<Video />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;
