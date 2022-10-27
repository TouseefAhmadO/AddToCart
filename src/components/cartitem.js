import React, { useState } from 'react';
import { useCart } from 'react-use-cart';

const Cartitem = () => {

    const {
        cartTotal,
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) return <h1 className='align-items-cente text-center pt-5 mt-5'>Cart Item List is Empty</h1>
    return (
        <section className='py-5 mt-5 container' >
            <div className='row justify-content-center'>
                <div className='col-12' >
                    <h5>Cart ({totalUniqueItems}) Total Items : ({totalItems}) </h5>
                    <table className='table table-light table-hover border m-0'>
                        <tbody className=''>
                            {items.map((item, index) => {
                                console.log(item)
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img src={item.image} style={{ height: "150px", objectFit: "contain" }} alt="phones" />
                                        </td>
                                        <td className='text-center fs-5 pt-5 text-secondary'> Name: <br />
                                            <span className='fw-bold fs-4 text-dark'>{item.name}</span></td>
                                        <td className='text-center fs-5 pt-5 text-secondary'> Model: <br />
                                            <span className='fw-bold fs-4 text-dark'>{item.model}</span>
                                        </td>
                                        <td className='text-center fs-5 pt-5 text-secondary'> Color: <br />
                                            <span className='fw-bold fs-4 text-dark'>{item.color}</span>
                                        </td>
                                        <td className='text-center fs-5 pt-5 text-secondary'> Price: <br />
                                            <span className='fw-bold fs-4 text-dark'>{item.price}</span>
                                        </td>
                                        <td className='text-center fs-5 pt-5 text-secondary'>Quantity : <br />
                                            <span className='fw-bold fs-4 text-dark'>({item.quantity})</span>
                                        </td>
                                        <td className='text-center'>
                                            <button
                                                className='btn btn-primary ms-2 mt-5'

                                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                            >-</button>
                                            <button
                                                className='btn btn-primary ms-2 mt-5 '
                                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                            >+</button> <br />
                                            <button className='btn btn-danger mt-3' onClick={() => removeItem(item.id)}>
                                                Remove Item
                                            </button>
                                        </td>
                                        <td className='text-center fs-4 fw-bold  pt-5'>
                                            Rs. 
                                            {item.price * item.quantity}</td>

                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='container col-auto mt-5'>
                    <h4 className='fs-1 fw-bold'>
                        Total Price : Rs. {cartTotal}
                    </h4>
                </div>
                <div className='container col-auto mt-5'>
                    <button
                        className='btn btn-primary'
                        onClick={() => emptyCart()}
                    >Clear Cart
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Cartitem