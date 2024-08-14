import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, { addNewPost, StateType, subscribe, updateTextareaPost } from './redux/state'
import { BrowserRouter } from 'react-router-dom';


export const allRerender = (state:StateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App  state={state} 
            addPost={addNewPost} 
            updateTextareaPost={updateTextareaPost}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

allRerender(state)

// Pattern
subscribe(allRerender)


