import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router";
import Auth from "./Screens/Auth";
import Dashboard from "./Screens/Dashboard";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Auth />} path="/" exact />
        <Route element={<Dashboard />} path="/dashboard" exact />
      </Routes>
    </div>
  );
}

export default App;
