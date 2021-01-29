import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItems'
import { Banner } from './Banner'
import { useFetch } from '../Hooks/useFetch';


const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 380px;
`;


const SectionMenu = styled.section`
    padding: 30px;
`;

export const Menu = ({setOpenItem}) => {
    const res = useFetch();

    const dbMenu = res.response

    return (
        <MenuStyled>
            <Banner/>
            { res.response ? 
            <>
                <SectionMenu>
                    <h2>Бургеры</h2>
                    <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem} />
                </SectionMenu>

                <SectionMenu>
                    <h2>Закуски / Напитки</h2>
                    <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem} />
                </SectionMenu>
            </>
            : res.error ? <div>Ошибка соединения...</div> : <div>Loading...</div>
            }
        </MenuStyled>
    )
    
};