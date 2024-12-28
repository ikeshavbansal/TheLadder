import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes,Route } from 'react-router'
import PortfolioSection from './Pages/sectionA.jsx'
import Cube from './Pages/sectionB.jsx'
import FoldingBoxes from './Pages/sectionB.jsx'
import ScrollAnimation from './Pages/sectionC.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<PortfolioSection/>}/>
        <Route path='sectionB' element={<FoldingBoxes/>}/>
        <Route path='sectionC' element={<ScrollAnimation/>}/>

      </Route>
    </Routes>
  </BrowserRouter>
    
  </StrictMode>,
)
