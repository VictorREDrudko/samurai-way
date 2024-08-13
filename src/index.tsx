import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { message } from 'antd';

// Types
export type ItemNavbarType = {
  id: number
  title: string
}

type InfoProfileType = {
  id: number
  title: string
  value: string
}

export type PersonalInfoProfileType = {
  userName: string
  info: InfoProfileType[]
}

export type PostType = {
  id: number
  text: string
  count: number
}

export type DialogsType = {
  id: number
  user: string
  messages: string[]
}

// DATA
const itemsNavbar: ItemNavbarType[] = [
  {id: 1, title:"profile"}, 
  {id: 2, title:"messanges"}, 
  {id: 3, title:"news"}, 
  {id: 4, title:"music"}, 
  {id: 5, title:"settings"}, 
];

const infoProfile: PersonalInfoProfileType[] = [
  { userName: "Viktor RED",
    info : [
    {id: 1, title: "Date of birth:", value: "2 September 1984"},
    {id: 2, title: "Address:", value: "Minsk, Hohlova 22-94"},
    {id: 3, title: "Education:", value: "BSU 2007"},
    {id: 4, title: "Web Site:", value: "https://it-kamasutra.com"},
  ]}
]

const posts: PostType[] = [
  {id: 1, text: "How I am?", count: 7},
  {id: 2, text: "I want to become a super specialist!!!", count: 1},
  {id: 3, text: "I'd like to speak English correctly and fluently", count: 22},
  {id: 4, text: "Hey, why nobody love me?", count: 5}
]

const dialogs: DialogsType[] = [
  {id: 1, user: "Alex", messages: ["Hello. how are you???", "oyyy! Hi!!! I am fine, thank you!!!", "It is very good)))"]},
  {id: 2, user: "Andru", messages: ["Hi", "Hi!!!", "Cool)))"]},
  {id: 3, user: "Gleb777", messages: ["Are you at home now????"]},
  {id: 4, user: "DimaFace", messages: ["Good morning! I am Dmitriy Ka!!! Pleas call me today"]},
  {id: 5, user: "AnonimusAll", messages: ["hGYUUYIUIUBMIUUHUHUPI"]},
  {id: 6, user: "GreatPlezuar", messages: ["+375295654321"]},
  {id: 7, user: "Nikodim99", messages: ["oyyy! Hi!!! I am fine, thank you!!!", "It is very good)))"]},
  {id: 8, user: "MariborGrand", messages: ["RRRRRRRRRRR"]},
]

ReactDOM.render(
    <App  itemsNavbar={itemsNavbar}
          infoProfile={infoProfile}
          posts={posts}
          dialogs={dialogs}/>,
  document.getElementById('root')
);

