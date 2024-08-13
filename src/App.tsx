import './App.css';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Content } from './components/content/Content';
import { DialogsType, ItemNavbarType, PersonalInfoProfileType, PostType } from '.';

type AppType = {
  itemsNavbar: ItemNavbarType[]
  infoProfile: PersonalInfoProfileType[]
  posts: PostType[]
  dialogs: DialogsType[] 
}

function App(props: AppType) {
   return (
    <BrowserRouter>
      <div className="wrapper">
        <Header/>
        <Navbar itemsNavbar={props.itemsNavbar}/>
        <Content infoProfile={props.infoProfile} posts={props.posts} dialogs={props.dialogs}/>
      </div>
    </BrowserRouter>
  );
}

export default App;

