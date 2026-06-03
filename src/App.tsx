import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ComponentGallery from './pages/ComponentGallery';
import SharePointDemo from './pages/SharePointDemo';
import BentoExample from './sandbox/BentoExample';

function App() {
  return (
    <BrowserRouter basename="/ZavaCore">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/copilot" element={<Layout />} />
        <Route path="/sharepoint" element={<SharePointDemo />} />
        <Route path="/gallery" element={<ComponentGallery />} />
        <Route path="/sandbox/bento" element={<BentoExample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
