import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { useState } from "react";

function App() {
  const [ison, setIson] = useState(true);
  const [tour, setTour] = useState([]);
  const handleClick = () => {
    const newIson = !ison;
    console.log(newIson);
    setIson(newIson);
}
  return (
    <BrowserRouter>
      <button className="bg-amber-300 px-4 py-2 rounded" onClick={handleClick}>
        click {ison ? 'bat' : 'tat'}
      </button>
 <button className="bg-amber-300 px-4 py-2 rounded" onClick= {()=> handleClickArg(!isOn)}>
        click {ison ? 'bat' : 'tat'}
      </button>
      <Routes>
        <Route path="/" element={<Home ison={ison} tour={tour} />} />
        <Route path="/about" element={<About ison={ison} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
