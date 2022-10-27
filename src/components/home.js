import React,{useState} from 'react';
import '../App.css';
import Data from './data';
import Items from './items';


const Home = () => {

    return (
        <div>
            <div className='bar pt-5 mt-5'>
                <p>Laptops</p>
                <p>Computers</p>
                <p style={{ borderBottom: "2px solid grey", fontWeight: "bold" }}>
                    Mobile phones</p>
                <p>Mac Books</p>
                <p>Other Devices</p>
            </div>
            <section className='py-4 container'>
                <h1 className='text-center'>Mobile Phones</h1>
                <div className='row justify-content-center'>
                    {
                        Data.map((item, index) => {
                            return (
                                < Items items={item} key={index} {...item} />
                            )
                        })
                    }
                </div>
            </section>
        </div >
    )
}

export default Home