import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Items from '../Main/Items'
import s from './MyLikes.module.css'


const LikesPage = () => {
  let ArrayOfLikes = useSelector((state) => state.MainPage.ArrayOfLikes)
  
  return(
    <div>
      <img className={s.backImg} src='/Img/back.png'/>
      <div className={s.title}>Мои закладки</div>
      <div className={s.ItemsWrapper}>{
      ArrayOfLikes.map((Item) => {return <Items id={Item.id} title={Item.title} image={Item.image} price={Item.price}/>})}
      </div>
    </div>
  )

}
export default LikesPage