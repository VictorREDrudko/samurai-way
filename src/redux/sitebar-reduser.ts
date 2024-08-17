// Types
export type ItemNavbarType = {
  id: number
  title: string
}

export type FriendType = {
  id: number
  userName: string
}

export type SitebarType = {
  itemsNavbar: ItemNavbarType[]
  friends: FriendType[]
}

// REDUCER
const initialState: SitebarType = {
  itemsNavbar: [
    {id: 1, title:"profile"}, 
    {id: 2, title:"messanges"}, 
    {id: 3, title:"news"}, 
    {id: 4, title:"music"}, 
    {id: 5, title:"settings"}, 
  ],
  friends: [
    {id: 1, userName:"Viktor"}, 
    {id: 2, userName:"Den"}, 
    {id: 3, userName:"Emile"},  
  ],
}

// Action creator
const sitebarReducer = (state = initialState, action: any) => {
  return state;
}

export default sitebarReducer;