import { getCart } from "../../Api/Api.jsx"

let initialState ={
  Items:[
    {id:2,title:'Мужские Кроссовки Nike Air Max 270',image:'Nike Air Max 270',price:12999},
    // {id:1,title:'Мужские Кроссовки Nike Blazer Mid Suede',image:'one',price:12999},
    // {id:3,title:'Мужские Кроссовки Nike Blazer Mid Suede',image:'Nike Blazer Mid Suede',price:8499},
    // {id:4,title:'Кроссовки Puma X Aka Boku Future Rider',image:'Puma X Aka Boku Future Rider',price:8999},
    // {id:5,title:'Мужские Кроссовки Under Armour Curry 8',image:'Under Armour Curry 8',price:15199},
    // {id:6,title:'Мужские Кроссовки Nike Kyrie 7',image:'Nike Kyrie 7',price:11300},
    // {id:7,title:'Мужские Кроссовки Jordan Air Jordan 11',image:'Jordan Air Jordan 11',price:10799},
    // {id:8,title:'Мужские Кроссовки Nike LeBron XVIII',image:'Nike LeBron XVIII',price:16499},
    // {id:9,title:'Мужские Кроссовки Nike Lebron XVIII Low',image:'Nike Lebron XVIII Low',price:13999}
  ],
  ShopList:[],
  ArrayOfLikes:[],
  isOpenShoppingCart:false
}


const MainReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'addItem':
      let newItem = {
        id:action.id,
        title:action.title,
        image:action.image,
        price:action.price
      }
      return {
        ...state,ShopList:[...state.ShopList,newItem]
      }
    case 'removeItem':
      return { 
        ...state,ShopList:state.ShopList.filter(item => item.id != action.id)
      }
    case 'changeShoppingCart':
      return {
        ...state, isOpenShoppingCart:action.value
      }
    case 'addLikedItem':
      let newLike = {
        id:action.id,
        title:action.title,
        image:action.image,
        price:action.price
      }
      return {
        ...state, ArrayOfLikes:[...state.ArrayOfLikes,newLike]
      }
    case 'removeLikedItem':
      return{
        ...state, ArrayOfLikes:state.ArrayOfLikes.filter(item => item.id != action.LikedId)
      }
    case 'addCart':
      return {
        ...state, Items:action.cards
      }
    default:
      return state;
  }
}
export const addItemAction = (id,title,image,price) => ({type: 'addItem',id,title,image,price})
export const removeItemAction = (id) => ({type:'removeItem', id})
export const isOpenShoppingCartAction = (value) => ({type:'changeShoppingCart', value})
export const addLikedItemAction = (id,title,image,price) => ({type:'addLikedItem', id,title,image,price})
export const removeLikedItemAction = (LikedId) => ({type:'removeLikedItem', LikedId})
export const addCart = (cards) => ({type: 'addCart',cards})

export const getItemThunk = () =>{
  return async (dispatch) => {
    let res = await getCart()
    dispatch(addCart(res))
  }
}

export default MainReducer