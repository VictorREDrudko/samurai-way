// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import state from './redux/state'
// import { BrowserRouter } from 'react-router-dom';
// import { addNewPost } from './redux/state'

//   ReactDOM.render(
//     <BrowserRouter>
//       <App state={state} addPost={addNewPost}/>
//     </BrowserRouter>,
//     document.getElementById('root')
//   );


import state from './redux/state';
import { allRerender } from './render';

allRerender(state)
