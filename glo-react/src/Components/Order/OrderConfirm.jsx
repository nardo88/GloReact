import React from 'react';
import styled from 'styled-components';
import { Overlay } from '../Modal/ModalItem';
import { OrderTitle, Total, TotalPrice } from '../Order/Order';
import { ButtonCheckout } from '../Styled/ButtonCheckout';
import { projection } from '../Functions/secondaryFunction';
import { totalPriceItem } from '../Functions/secondaryFunction';
import { formatCerruncy } from '../Functions/secondaryFunction';

const Modal = styled.div`
    background-color: white;
    width: 600px;
    padding: 30px;
`;

const Text = styled.h3`
    text-align: center;
    margin-bottom: 30px;
`;

const rulesData = {
    name: ['name'],
    price: ['price'],
    count: ['count'],
    toppings: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),
        arr => arr.length ? arr : 'no topping'],
    choices: ['choice', item => item ? item : 'no choices']
}

const sendOrder = (dataBase, orders, authentication) => {
    // создали объект который будем отправлять в БД
    const newOrder = orders.map(projection(rulesData));
    // обращаемся к объекту БД 
    // метод ref - определяет в какой участок JSON файла будут помещены данные. у нас это ключ order
    // метод push генерирует уникальный ключ для свойства добавляемого объекта
    // set непосредственно грузит в бд то что ему передали в качестве аргумента
    dataBase.ref('orders/').push().set({
        // объект который мы пушим в JSON БД
        nameClient: authentication.displayName,
        email:authentication.email,
        order: newOrder
    })
}

export const OrderConfirm = ({
    orders,
    setOrders,
    authentication,
    setOpenOrderConfirm,
    firebaseDataBase
}) => {
    //создаем объект БД
    const dataBase = firebaseDataBase();

    const total = orders.reduce((result, order) => 
        totalPriceItem(order) + result, 0)


    return (
        <Overlay>
            <Modal>
                <OrderTitle>{authentication.displayName}</OrderTitle>
                <Text>Осталось только подтвердить заказ</Text>
                <Total>
                    <span>Итого:</span>
                    <TotalPrice>{formatCerruncy(total)}</TotalPrice>
                </Total>
                <ButtonCheckout onClick={() => {
                    sendOrder(dataBase, orders, authentication);
                    setOrders([]);
                    setOpenOrderConfirm(false);
                }}>Подтвердить</ButtonCheckout>
            </Modal>
        </Overlay>
    )
}