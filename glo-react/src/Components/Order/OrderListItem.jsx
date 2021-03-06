import React from 'react';
import styled from 'styled-components';
import trashImage from '../../img/trash.svg';
import { totalPriceItem } from '../Functions/secondaryFunction';
import { formatCerruncy } from '../Functions/secondaryFunction';


const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${trashImage});
    background-position: cenrter;
    background-size: cover;
    background-repeat: no-repeat;

`;

const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
    flex-wrap: wrap;
    cursor: pointer;
`;

const ItemName = styled.span`
    flex-grow: 1;
`;


const ItemPrice = styled.span`
    margin-left: 20px;
    margin-right: 10px;
    min-width: 65px;
    text-align: right;
`;


const Toppings = styled.div`
    color: #9a9a9a;
    font-size: 14px;
    width: 100%;
`;


export const OrderListItem = ({ order, index, deletItem, setOpenItem }) => {
    const topping = order.topping.filter(item => item.checked)
        .map(item => item.name)
        .join(', ');

    return (
        <OrderItemStyled onClick={(e) => !e.target.classList.contains('delete') && setOpenItem({...order, index})}>
            <ItemName>{order.name} {order.choice}</ItemName>
            <span>{order.count}</span>
            <ItemPrice>{formatCerruncy(totalPriceItem(order))}</ItemPrice>
            <TrashButton className='delete' onClick={() => deletItem(index)}/>
            {topping && <Toppings>Допы: {topping}</Toppings>}
        </OrderItemStyled>
    )
};