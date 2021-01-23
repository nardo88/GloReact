import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;


const CountInput = styled.input`
    width: 50px;
    font-size: 20px;
    margin: 0 5px;
`;

const ButtonCount = styled.button`
    background-color: transparent;
    padding: 5px;
`;

const Wrapper = styled.div`
    display: flex;
`;


export const CountItem = ({count, setCount, onChange}) => {

    return (
        <CountWrapper>
            <span>Количество</span>
            <Wrapper >
                <ButtonCount disabled={ count <= 1 ? true : false} onClick={() => setCount(count - 1)}>-</ButtonCount>
                <CountInput value={count < 1 ? 1 : count} type="number" min="1" max="100" onChange={onChange}/>
                <ButtonCount onClick={() => setCount(count + 1)}>+</ButtonCount>
            </Wrapper>
            

        </CountWrapper>
    )
}