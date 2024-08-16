import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';

export const allRerender = () => {
  ReactDOM.render(
    <BrowserRouter>
        <App store={store} state={store.getState()}/>
        {console.log(store.getState())}
    </BrowserRouter>,
    document.getElementById('root')
  );
}

allRerender()

// Pattern
store.subscribe(() => {
  allRerender()
})


