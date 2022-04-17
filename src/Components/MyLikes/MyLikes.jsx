import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Items from '../Main/Items'
import s from './MyLikes.module.css'


const LikesPage = () => {
  let ArrayOfLikes = useSelector((state) => state.MainPage.ArrayOfLikes)
  
  return(
    <div>
      <Link to='/Sneakers/'>
        <img className={s.backImg} src='Img/back.png'/>
      </Link>
      <div className={s.title}>Мои закладки</div>
      <div className={s.LikesItem}>{ArrayOfLikes.length === 0 ?
      <p className={s.plsAdd}>Хей, добавь что нибудь!</p>:
        <div className={s.ItemsWrapper}>{
        ArrayOfLikes.map((Item) => {return <Items id={Item.id} title={Item.title} image={Item.image} price={Item.price}/>})}
        </div> 
    }
    </div>
    </div>
  )

}
export default LikesPage