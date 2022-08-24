import { Routes, Route } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { About, Home, Contact, Portfolio, Resume, Skills } from "./pages";
import Navbar from "./components/navbar";
import particlesConfig from "./helpers/particlesConfig";

function App() {
  const particlesinit = async (main) => {
    await loadFull(main);
  };
  return (
    <div>
      <Particles
        id='particles'
        options={particlesConfig}
        init={particlesinit}
      />
      <Navbar />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
