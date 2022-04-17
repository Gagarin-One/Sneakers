import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addItemAction, addLikedItemAction, removeItemAction, removeLikedItemAction } from '../../Redux/Reducers/MainReducer';
import s from './Items.module.css'
const Items = ({id,title,image,price}) => {

  let ArrayOfLikes = useSelector((state) => state.MainPage.ArrayOfLikes)
  let TrashArray = useSelector((state) => state.MainPage.ShopList)

  const dispatch = useDispatch()

  const changeLike = (id,title,image,price) => {
    ArrayOfLikes.some((item) => item.id === id)?
    dispatch(removeLikedItemAction(id)):
    dispatch(addLikedItemAction(id,title,image,price))
  }

  const onTrashChange = (id,title,image,price) => {
    TrashArray.some((item) => item.id === id)?
    dispatch(removeItemAction(id)):
    dispatch(addItemAction(id,title,image,price))
  }

  
        return <div key={id} className={s.wrapper}>
                  <div>{ArrayOfLikes.some((item) => item.id === id)?
                  <img className={s.liked} onClick={() => changeLike(id)} width="33" height="33"src='Img/likedActive.png' />:
                  <img className={s.liked} onClick={() => changeLike(id,title,image,price)} width="33" height="33"src='Img/likedPasive.svg' />
                  }</div>
                  
                  <img className={s.itemImage} width="133" height="112" src={`Img/${image}.png`}/>
                  <p className={s.title}>{title}</p>
                  <p className={s.priceTitle}>Цена:</p>
                  <div className={s.priceWrapper}>
                    <b>{price} руб.</b>
                    <div>{TrashArray.some((item) => item.id === id)?
                          <img className={s.add} onClick={()=>onTrashChange(id,title,image,price)} width="33" height="33" src='Img/added.svg'/>:
                          <img className={s.add} onClick={()=>onTrashChange(id,title,image,price)} width="33" height="33" src='Img/add.svg'/>
                    }</div>
                  </div>
                </div>
     
  
}

export default Items
