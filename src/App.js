import './App.css';
import { Route, Routes } from 'react-router-dom';
import Index from "./pages/Index"
import Beers from "./pages/Beers"
import RandomBeer from "./pages/RandomBeer"
import NewBeer from "./pages/NewBeer.jsx"
import Details from "./pages/Details"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/randomBeer" element={<RandomBeer />} />
        <Route path="/newBeer" element={<NewBeer />} />
        <Route path="/beers/:beerId" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
