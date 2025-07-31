import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/Assets/Pages/Home'
import About from '../src/Assets/Pages/About'
import Header from './Assets/components/Header/Header';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App;
