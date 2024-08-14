import './App.css';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { Content } from './components/content/Content';
import { StateType } from './redux/state';

type AppType = {
  state: StateType
  addPost: (text: string)=>void
  updateTextareaPost: (newtext: string)=>void
}

function App({state, addPost, updateTextareaPost}: AppType) {
   return (
    <div className="wrapper">
      <Header/>
      <Navbar state={state.sitebar}/>
      <Content state={state.contentPage} addPost={addPost} updateTextareaPost={updateTextareaPost}/>
    </div>
  );
}

export default App;

