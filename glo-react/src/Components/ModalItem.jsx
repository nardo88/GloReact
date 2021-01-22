import React from 'react';
import styled from 'styled-components';
import {ButtonCheckout} from './ButtonCheckout'

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Modal = styled.div`
    background-color:#fff;
    width: 600px;
    height: 600px;

`;

const Banner = styled.div`
    height: 200px;
    width: 100%;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-position: center;
    
`;

const Content = styled.section`
    padding: 30px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: calc(100% - 200px);

`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    font-weight: 700;
    font-family: 'PACIFICO', cursive;
`;

export const ModalItem =({openItem, setOpenItem, orders, setOrders}) => {
    function closeModal(e) {
        if(e.target.id === 'overlay'){
            setOpenItem(null);
        }
    }

    const order = {
        ...openItem
    }

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    }
    
    return(
        <Overlay id="overlay" onClick={closeModal}>
            
            <Modal>
                <Banner img={openItem.img}/>
                <Content>
                    <HeaderContent>
                        <div>{openItem.name}</div>
                        <div>{openItem.price}</div>
                    </HeaderContent>
                    <ButtonCheckout onClick={addToOrder}>Добавить</ButtonCheckout>
                </Content>
            </Modal>
        </Overlay>
    )

}

