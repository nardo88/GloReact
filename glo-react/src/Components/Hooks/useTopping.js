import { useState } from 'react';

const getTopping = (toppings) => {
    return toppings.map(item => ({
        name: item, 
        checked: false,
    }));
}

export const useTopping = (openItem) => {
    const [toppings, setToppings] = useState(getTopping(openItem.toppings));

    const checkToppings = index => {
        setToppings(toppings.map((item, i) => {
            if (i === index){
                item.checked = !item.checked;
            }

            return item;
        }));
    }

    return {toppings, checkToppings};
}