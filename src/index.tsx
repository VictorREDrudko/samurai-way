import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

export const allRerender = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App state={store.getState()}/>
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

allRerender()

// Pattern
store.subscribe(() => {
  allRerender()
})


