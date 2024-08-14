import './App.css';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Content } from './components/content/Content';
import { StateType } from './redux/state';

type AppType = {
  state: StateType
}

function App({state}: AppType) {
   return (
    <BrowserRouter>
      <div className="wrapper">
        <Header/>
        <Navbar state={state.sitebar}/>
        <Content state={state.contentPage}/>
      </div>
    </BrowserRouter>
  );
}

export default App;

