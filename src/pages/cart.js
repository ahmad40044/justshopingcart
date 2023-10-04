import { useState } from "react"


export const Cart = () => {
const [cart,setCart]=useState([]);
const [name,setName]=useState("");
const [price,setPrice]=useState("");

const addToCart=()=>{
    
const cartElement ={
id: Date.now(),
name: name,
price: price,
}
setCart ([...cart,cartElement]);
console.log(cart);

}

const removeClick=(id)=>{

    const updatedCart = cart.filter((item) => item.id !==id )
    setCart(updatedCart)

}

const calculate= ()=>{
   return cart.reduce((total,cart)=>total +parseFloat(cart.price) , 0)
}


  return (
    <div className="App">
      <ul>
        <li style={{listStyle: 'none'}}> 
           Name <input type="text" name='name' onChange={(e)=>setName(e.target.value)}/> Price <input type="number" name="price"  onChange={(e)=>setPrice(e.target.value)}/><br/><button onClick={addToCart} type="submit">AddToCart</button>
        </li>
        
      </ul>
      <ul>
        {cart.map((cart)=>
        (
        <li style={{listStyle: 'none'}} key={cart.id}>{cart.name} - ${cart.price} <button onClick={()=>removeClick(cart.id)}>Remove</button></li>

        ))}
      </ul>
      <p>Total Price = {calculate()}</p>
    </div>
  )
}
