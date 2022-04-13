import React, { useEffect } from 'react';
import {Route,Routes} from 'react-router-dom'
import s from'./App.module.css';
import Main from './Components/Main/Main'
import LikesPage from './Components/MyLikes/MyLikes'
import MyTabs from './Components/MyTabs/MyTabs'
import Header from './Components/Header/Header'
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { getItemThunk } from './Redux/Reducers/MainReducer';
const App = () => {
  let TrashArray = useSelector((state) => state.MainPage.ShopList)
  let isOpenShoppingCart = useSelector((state) => state.MainPage.isOpenShoppingCart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getItemThunk())
    
  },[])

  let tax = 0
  const ItemCounter =()=>{ 
    let totalPrice = 0
    for (let i=0; i<TrashArray.length; i++) {
      totalPrice += TrashArray[i].price
    }
    tax = Math.ceil(totalPrice* 0.05)
    return Math.ceil(totalPrice - tax)
  }

  return (
    <div className={s.wholeOpacity}>
      <div className={s.fixedWrapper}>
        <div >
          {isOpenShoppingCart && <ShoppingCart ItemCounter={ItemCounter}/>}
        </div>
      </div>
      <div className={s.appWindow}>
      <Header ItemCounter={ItemCounter}/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/MyLikes" element={<LikesPage/>}/>{/* 
        <Route path="/MyTabs" element={<MyTabs/>}/>*/}
      </Routes> 
      </div>
    </div>
  );
}

export default App;
