import { useState } from 'react';

export const useOrder =() => {
    const [ orders, setOrders ] = useState([]);
    return { orders, setOrders };
} 

