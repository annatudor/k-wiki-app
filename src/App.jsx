import Navbar from "./components/navbar/Navbar";
import LeftSidebar from "./components/navbar/LeftSidebar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <LeftSidebar />
    </Router>
  );
}

export default App;
