import React from 'react';
import { NavBar } from './Components/NavBar';
import { Menu } from './Components/Menu';
import { GlobalStyle } from './Components/globalStyle';
import {ModalItem} from './Components/ModalItem';



function App() {
  const [openItem, setOpenItem] = React.useState(null);

  console.log('Item', openItem);


  return (
    <div> 
      <GlobalStyle/>
      <NavBar />
      <Menu setOpenItem={setOpenItem} />
      <ModalItem openItem={openItem} setOpenItem={setOpenItem} />
    </div>
    
  );
}

export default App;
