import './App.css';
import {   Routes, Route, Link, useParams} from "react-router-dom";
import {Box} from '@mui/material';

import Navbar from './component/Navbar';
import Home from './pages/Home';
import Footer from './component/Footer';
import ExerciseDetail from './pages/ExerciseDetail';

function App() {
  return (
    <>
    
    <Box width="400px" sx={{width: {xl:'1488'}}} m="auto">
     
    <Navbar />
     
        <Routes>
        
        <Route path ="/" element = {<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
    
      </Routes>
      
      <Footer />
    </Box>
    
    </>
  );
}

export default App;
