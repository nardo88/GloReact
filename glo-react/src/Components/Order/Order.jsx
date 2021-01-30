import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Styled/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { totalPriceItem } from '../Functions/secondaryFunction';
import { formatCerruncy } from '../Functions/secondaryFunction';



const OrderStyled = styled.section`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 80px;
    left: 0;
    background: #fff;
    max-width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0,0,0,0.25);
    padding: 20px;

`;

export const OrderTitle = styled.h2`
    text-align: center;
    margin-bottom: 30px;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul``;


export const Total = styled.div`
    display: flex;
    margin: 0 35px 30px;
    & span:first-child {
        flex-grow: 1;
    }
`;

export const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`;

const EmptyList = styled.p`
    text-align: center;
`;

export const Order = ({ 
    orders,
    setOrders,
    setOpenItem,
    authentication,
    login,
    setOpenOrderConfirm
     }) => {
    
    // функция которая будет выполняться при нажатии на кнопку, т.е. нажали и данные улетели в БД
   
    const total = orders.reduce((result, order) => 
        totalPriceItem(order) + result, 0)

    const totalCounter = orders.reduce((result, order) => order.count + result, 0);

    const deleteItem = index => {
        const newOrders = [...orders];

        newOrders.splice(index, 1);

        setOrders(newOrders);
    }

    return (
        <OrderStyled>
            <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
            <OrderContent>
               { orders.length ? <OrderList>
                    {orders.map((order, index) => <OrderListItem key={index} order={order} deletItem={deleteItem} index={index} setOpenItem={setOpenItem} />)}
                </OrderList> 
                : <EmptyList>Список заказов пуст</EmptyList>}
            </OrderContent>
            <Total>
                <span>Итого</span>
                <span>{totalCounter}</span>
                <TotalPrice>{formatCerruncy(total)}</TotalPrice>
            </Total>
            <ButtonCheckout onClick={() => {
                if (authentication){
                    setOpenOrderConfirm(true);

                } else {
                    login();
                }
            }}>Оформить</ButtonCheckout>
        </OrderStyled>
    )
}