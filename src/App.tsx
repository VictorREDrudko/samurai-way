import './App.css';
import { Header } from './components/header/Header';
import { Content } from './components/content/Content';
import { Navbar } from './components/navbar/Navbar';
import { StateType } from './redux/redux-store';

type AppType = {
  state: StateType
}

function App({state}: AppType) {
   return (
    <div className="wrapper">
      <Header/>
      <Navbar state={state.sitebar}/>
      <Content state={state.profilePage}/>
    </div>
  );
}

export default App;

