import './App.css';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Content } from './components/content/Content';

function App() {
   return (
    <BrowserRouter>
      <div className="wrapper">
        <Header/>
        <Navbar/>
        <Content/>
      </div>
    </BrowserRouter>
  );
}

export default App;

