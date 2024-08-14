import './App.css';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { Content } from './components/content/Content';
import { StateType } from './redux/state';

type AppType = {
  state: StateType
}

function App({state}: AppType) {
   return (
    <div className="wrapper">
      <Header/>
      <Navbar state={state.sitebar}/>
      <Content state={state.contentPage}/>
    </div>
  );
}

export default App;

