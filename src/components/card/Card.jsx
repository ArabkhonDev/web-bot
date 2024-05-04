import { useState } from 'react';
import Button from '../button/Button';
import './Card.css';
const Card = (props) => {
  const [count, setCount] = useState(0);
  const {cource, onAddItem, onRemoveItem} = props;

  const hundleIncrement = () =>{
    setCount(prev => prev + 1)
    onAddItem(cource)
  };
  const hundleDecrement = () =>{
    setCount(prev => prev - 1)
    onRemoveItem(cource)
  };
  return (
    <div className="cource_info">
      <div className={`${count != 0 ? "card_badge" : "card_badge_hidden"}`}>{count}</div>
        <h1>{cource.id}-{cource.title}</h1>
        <img src={cource.Image} alt={cource.title} />
        <div className="flex">
          <div className='course_buy_btn'>
          <Button title='+' onClick={hundleIncrement} type="add"/>
          {count != 0 &&(
          <Button title='-' onClick={hundleDecrement} type="remove"/>
          )}
          </div>
          <span className='cource_price'>{cource.price}$</span>
        </div>
    </div>
  )
}

export default Card