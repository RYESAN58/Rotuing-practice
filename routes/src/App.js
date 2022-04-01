import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'

const Home = (props) => {
  return(
    <div>
      <h1 style={{color: 'blue'}}>This is the home page</h1>
      <Link to={'/about'}> Go To About</Link>
    </div>
  )
};

const About = (props) => {
  return(
    <div>
      <h1 style={{color: 'red'}}>This is the about page</h1>
      <Link to={'/'}> Go To Home</Link>
    </div>
)
};

function App() {
  return (
    <BrowserRouter>
      <h1>Routing example</h1>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
