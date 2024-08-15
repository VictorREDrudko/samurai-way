import './App.css';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { Content } from './components/content/Content';
import { StateType } from './redux/store';

type AppType = {
  state: StateType
  dispatch: (action: any)=>void
}

function App({state, dispatch} : AppType) {
   return (
    <div className="wrapper">
      <Header/>
      <Navbar state={state.sitebar}/>
      <Content  state={state} 
                dispatch={dispatch} />
    </div>
  );
}

export default App;

