import TemplatePage from './pages/_TemplatePage'
import GeneratorPage from './pages/GeneratorPage';
import HomePage from './pages/HomePage';

import './styles/App.css'
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path='/' element={<TemplatePage />}>
        <Route index element={<HomePage />}/>
        <Route path="generator" element={<GeneratorPage />}/>
        {/* <Route path="generator / saved" element={<SavedThemsPage />} /> */}
      </Route>
    </Routes>
  )
}

export default App
