import React from 'react';
import { NavBar } from './Components/NavBar';
import { Menu } from './Components/Menu';
import { GlobalStyle } from './Components/globalStyle';
import { ModalItem } from './Components/ModalItem';
import { Order } from './Components/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrder } from './Components/Hooks/useOrders';



function App() {
  const openItem = useOpenItem();
  const orders = useOrder();

  return (
    <div> 
      <GlobalStyle/>
      <NavBar />
      <Order {...orders} />
      <Menu {...openItem} />
      {
        openItem.openItem &&  <ModalItem {...openItem} {...orders} />
      }
     
    </div>
    
  );
}

export default App;
