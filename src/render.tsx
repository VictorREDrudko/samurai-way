import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addNewPost, StateType } from './redux/state'
import { BrowserRouter } from 'react-router-dom';


export const allRerender = (state:StateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addNewPost}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}
