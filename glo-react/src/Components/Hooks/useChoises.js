import { useState } from 'react';

export const useChoises = () => {
    const [choice, setChoise] = useState();

    function changeChoices(e) {
        setChoise(e.target.value)
    }

    return {choice, changeChoices};

}