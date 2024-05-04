import { totalPrice } from '../../units/totalPrice';
import Button from '../button/Button'
import './cart.css'

const Cart = (props) => {
  const {cartItems, onCheckout} = props;
  return (
    <div className='cart_container'>
      <p>Umumiy narx: ${totalPrice(cartItems)}</p>
      <span>productlar soni: 12</span>
      <br />
      <Button title={`${cartItems.length == 0 ? 'buyurtma' : "To'lov"} `} 
              type='checkout'
              onClick={onCheckout}   />
    </div>
  )
}

export default Cart
