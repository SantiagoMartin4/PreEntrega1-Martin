import { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState (10);
    
    const plus = () => {
        if(count < stock){
        setCount(count + 1)
        }
    }
    const minus = () => {
        if(count > 0){ 
        setCount(count - 1)
        }
    }
    
return (
    <div>
        <div>
            <Button onClick={minus}>-</Button>
            <span className="btn">{count}</span>
            <Button onClick={plus}>+</Button>
        </div>
        <Button disabled={count === 0 || count === stock } onClick={()=>onAdd(count)}>Comprar</Button>
    </div>
)
};

export default ItemCount;
