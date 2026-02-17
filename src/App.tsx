import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import ComponentGallery from './pages/ComponentGallery';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/gallery" element={<ComponentGallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
