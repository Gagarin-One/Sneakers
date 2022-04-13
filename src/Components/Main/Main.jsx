import React, { useState } from 'react'
import s from './Main.module.css'
import Items from './Items'
import { useSelector } from 'react-redux'

const Main = (props) => {
  let ArrayOfItems = useSelector((state) => state.MainPage.Items)

  let [SearchValue, setSearchValue] = useState('') 
  const onChangeSearch = (e) => {
    setSearchValue(e.target.value)
  } 
  return (
    <div className={s.MainWrapper}>
      <div className={s.MainHeader}>
        <b>
          Все кроссовки
        </b>
        <div>
          <input onChange={onChangeSearch} value={SearchValue} placeholder="Поиск..." type='text'/>
        </div>
      </div>
      <div className={s.ItemsWrapper}>
      
      {ArrayOfItems.filter((item) => item.title.toLowerCase().includes(SearchValue.toLowerCase())).map((Item) => {return <Items id={Item.id} title={Item.title} image={Item.image} price={Item.price}/>})}
      </div>
      
    
    </div>
  )
}
export default Main