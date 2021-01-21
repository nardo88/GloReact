import React from 'react';
import { NavBar } from './Components/NavBar';
import { Menu } from './Components/Menu';
import { GlobalStyle } from './Components/globalStyle';
import { ModalItem } from './Components/ModalItem';
import { Order } from './Components/Order';



function App() {
  const [openItem, setOpenItem] = React.useState(null);

  return (
    <div> 
      <GlobalStyle/>
      <NavBar />
      <Order />
      <Menu setOpenItem={setOpenItem} />
      <ModalItem openItem={openItem} setOpenItem={setOpenItem} />
    </div>
    
  );
}

export default App;
