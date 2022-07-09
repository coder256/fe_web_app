import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home";
import Layout from "./components/Layout";
import Edit from "./components/Edit";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}></Route>
            <Route path="/edit/:id" element={<Edit/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
