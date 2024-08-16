import './App.css';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { Content } from './components/content/Content';
import { StateType } from './redux/redux-store';

type AppType = {
  store: any 
  state: StateType
}

function App({store, state} : AppType) {
   return (
    <div className="wrapper">
      <Header/>
      <Navbar state={state.sitebar}/>
      <Content  state={state} 
                store={store} />
    </div>
  );
}

export default App;

