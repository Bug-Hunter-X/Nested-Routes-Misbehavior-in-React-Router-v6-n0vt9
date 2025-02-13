import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} >
          <Route path=':id' element={<AboutDetails/>}/ >
        </Route>        
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {return <div>Home</div>}
function About() { const location = useLocation(); return <div>About {location.pathname}</div>}
function AboutDetails() { const location = useLocation(); return <div>About Details {location.pathname}</div>}
function NoMatch() {return <div>NoMatch</div>}
export default App; 