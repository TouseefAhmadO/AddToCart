import React, {useState} from 'react'
import {useCart} from 'react-use-cart'

const Items = ({name,model,color,price,image,items, counts}) => {
    const [nam , setNam] = useState("Add To Cart");
    const {addItem } = useCart();
    console.log(counts)

    const change = ()=>{
        addItem(items);
        (nam) == "Add To Cart" ?
        setNam ("Cart Again") : 
        setNam ("Cart Again");
    }
    return (
        <div className='col-lg-4 col-sm-12 text-center '>
            <div class="card p-3 my-2 shadow ">
                <img src={image} class="card-img-top" alt="phone" style={{height:"200px", objectFit:"contain"}} />
                <div class="card-body ">
                    <h5 class="card-title text-secondary ">
                        Company: <span className='fs-3 text-dark'>{name}
                        </span></h5>
                    <h6 class="card-title text-secondary">
                        Model: <span className='fs-4 text-dark'>{model}
                        </span></h6>
                    <h6 class="card-text text-secondary">
                        Color: <span className='fs-6 text-dark'>{color}
                        </span></h6>
                    <h5 class="card-title text-secondary">
                        Price: <span className='fs-3 text-dark' > {price}
                        </span></h5>
                    <button class="btn btn-primary" onClick={change}>{nam}</button>
                </div>
            </div>
        </div>
    )
}

export default Items