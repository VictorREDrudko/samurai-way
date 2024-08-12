import './App.css';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { Main } from './components/main/Main';
import { Dialogs } from './components/dialogs/Dialogs';

function App() {
  return (
  <div className="wrapper">
    <Header/>
    <Navbar/>
    <div className="content">
      {/* <Main/> */}
      <Dialogs/>
    </div>
  </div>
  );
}

export default App;

