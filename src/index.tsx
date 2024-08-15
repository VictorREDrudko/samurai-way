import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateType, } from './redux/state'
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state';


export const allRerender = (state:StateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App  state={state} 
            dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>,
    document.getElementById('root')
  );
}

allRerender(store.getState())

// Pattern
store._subscribe(allRerender)


