import { useEffect, useState } from 'react';
import './App.css'
import Card from './components/card/Card';
import Cart from './components/cart/Cart';
import { getData } from './constants/db'
import { useCallback } from 'react';

const cources = getData();

const telegram = window.Telegram.WebApp;
console.log(telegram);

const App = () => {
const [cartItems, setCartItems] = useState([]);

useEffect(() => {
  telegram.ready();
}, [])


const onAddItem =(item)=>{
  const existItem = cartItems.find(c => c.id == item.id);
  if(existItem){
    const newData = cartItems.map(c => c.id == item.id ? {...existItem, quantity: existItem.quantity + 1} : c);
    setCartItems(newData);
  }
  else{
    const newData = [...cartItems, {...item, quantity : 1}];
    setCartItems(newData); 
  }
};
const onRemoveItem =(item)=>{
  const existItem = cartItems.find(c => c.id == item.id);
  if(existItem.quantity ==1){
    const newData = cartItems.filter(c => c.id != existItem.id );
    setCartItems(newData);
  }
  else{
    const newData = cartItems.map(c=> c.id == existItem.id ) ? {...existItem, quantity: existItem.quantity - 1} : c
    setCartItems(newData); 
  }
};

const onSendData = useCallback(()=>{
  telegram.sendData (JSON.stringify(cartItems))
}, [cartItems])

useEffect(()=>{
  telegram.onEvent('manButtonClicked', onSendData);
  return ()=> telegram.offEvent('mainButtonClicked', onSendData)
}, [onSendData])

const onCheckout =()=>{
  telegram.MainButton.text = 'sotib olish'; 
  telegram.MainButton.show();
}

  return (
    <>
      <div>
        <h1>Sammi kurslari</h1>
        <Cart cartItems ={cartItems} onCheckout ={onCheckout}/>
        <div className="cources_list">
        {
          cources.map(cource => (
            <>
             <Card key={cource.id} cource = {cource} onAddItem = {onAddItem} onRemoveItem = {onRemoveItem} />
            </>
          ))
        }  
        </div>
      </div>
    </>
  )
}

export default App
