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

export const OrderListItem = ({ order }) => {
    return (
        <OrderItemStyled>
            <ItemName>{order.name}</ItemName>
            <span>{order.count}</span>
            <ItemPrice>{formatCerruncy(totalPriceItem(order))}</ItemPrice>
            <TrashButton/>
        </OrderItemStyled>
    )
};