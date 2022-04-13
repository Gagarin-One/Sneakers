import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { isOpenShoppingCartAction } from "../../Redux/Reducers/MainReducer";
import s from './Header.module.css'
const Header = (props) => {
  let isOpenShoppingCart = useSelector((state) => state.MainPage.isOpenShoppingCart)
  const dispatch = useDispatch()
  
  const onShoppingCartChange = () => {
    isOpenShoppingCart?
      dispatch(isOpenShoppingCartAction(false)):
      dispatch(isOpenShoppingCartAction(true))
    }

    
  return (
    <div className={s.Header}>
      <NavLink to='/' style={{ textDecoration: 'none' }}>
      <div className={s.LeftHeader}>
      
        <img width={40} height={40} src="/Img/image 4.png"/>
        
        <div className={s.HeaderTitle}>
          
          <h3 style={{ color:'black' }}>SNEAKERS SHOP</h3>
          <p>Магазин лучших кроссовок</p>
          
        </div>
       
      </div>
      </NavLink>

      <div className={s.RightHeader}>
        <img onClick={()=>{onShoppingCartChange()}} className={s.shoppingCart} width={18} height={17} src="/Img/Shopings.svg"/>
        <p>{props.ItemCounter()}руб.</p>

        <Link to='/MyLikes'>
        <img className={s.liked} width={20} height={19} src="/Img/heart.png"/>
        </Link>
        
        <img width={20} height={20} src="/Img/Union.svg"/>
      </div>

   </div>
  )
}
export default Header