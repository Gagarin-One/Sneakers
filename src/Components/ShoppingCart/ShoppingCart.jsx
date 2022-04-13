import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { isOpenShoppingCartAction, removeItemAction } from '../../Redux/Reducers/MainReducer'
import s from './ShoppingCart.module.css'


const ShoppingCart = (props) => {
  let TrashArray = useSelector((state) => state.MainPage.ShopList)

  const dispatch = useDispatch()

  const onShopChange = (id) => {
      dispatch(removeItemAction(id))
    }
  const closeShop = () => {
    dispatch(isOpenShoppingCartAction())
  }
  return (
    <div className={s.wholeOpacity}>
    <div className={s.ShoppingCartWrapper}>
      
    <div className={s.ShoppingCart}>
      <div className={s.TitleShop}>
      <p>Корзина</p>
      <img onClick={() => closeShop()} className={s.removeItem} src='/Img/removeShopItem.svg'/>
      </div>
    <div>{TrashArray.length === 0 ? 
    <div className={s.Empty}>
    <img className={s.trash} src='/Img/trash.png'/>
    <p className={s.TitleEmpty}>Корзина пустая</p>
    <p className={s.DescriptEmpty}>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
    <div className={s.previousButton}>
      <img src='/Img/previousDirect.png'/>
      <p onClick={() => closeShop()}>Вернуться назад</p>
    </div>
    </div>:
    <>
    <div className={s.items}>
    {TrashArray.map((item) => {
      return <div className={s.ShoppingItem}>
      <img src={`/Img/${item.image}.png`} className={s.ItemImage}/>
      <div className={s.textWrapper}>
        <div className={s.Title}>{item.title}</div>
        <div className={s.Price} >{item.price}</div>
      </div> 
      <img onClick={() => onShopChange(item.id)} className={s.removeItem} src='/Img/removeShopItem.svg'/>
      </div>
    })}
  </div>
  <div className={s.BottomBlock}>
    <div className={s.PriceBlock}>
      <p>Итого:</p>
      <div className={s.border}></div>
      <div className={s.TotalPrice}>{props.ItemCounter()} руб.</div>
    </div>
    <div className={s.PriceBlock}>
      <p>Налог 5%:</p>
      <div className={s.border}></div>
      <div className={s.TotalPrice}>{props.tax} руб.</div>
    </div>
    <div className={s.PlaceAnOrderButton}>
      <p>Оформить заказ</p>
      <img src={'/Img/direct.svg'}/>
    </div>
  </div>
    
    </>
    }</div>
     
  </div>
  </div>
  </div>)
  
}
export default ShoppingCart