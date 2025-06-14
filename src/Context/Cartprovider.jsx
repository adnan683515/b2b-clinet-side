import React, { createContext, useContext, useEffect, useState } from 'react';
import { Authcontext } from './AuthContext';

export const CartContext = createContext()

const Cartprovider = ({ children }) => {

    const { user } = useContext(Authcontext)
    const [cartItem, setCartItem] = useState(0)



    useEffect(() => {
        if (user) {
            fetch(`https://b2b-server-side.vercel.app/mycart/${user?.email}`, {
                headers: {
                    Authorization: `Bearar ${user?.accessToken}`
                }
            })
                .then((res) => res.json())
                .then((result) => {
                    setCartItem(result?.length)
                    
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [user,cartItem])

    const value = {
        setCartItem,
        cartItem
    }


    return (
        <CartContext.Provider value={value} >
            {children}
        </CartContext.Provider>
    );
};

export default Cartprovider;