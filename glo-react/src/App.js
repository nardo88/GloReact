import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Styled/globalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrder } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { useDb } from './Components/Hooks/useDb';


const firebaseConfig = {
  apiKey: "AIzaSyBEGnE4ShfI_XrSLHLrqgUE82Y0BNDfzL4",
  authDomain: "gloreact.firebaseapp.com",
  databaseURL: "https://gloreact-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gloreact",
  storageBucket: "gloreact.appspot.com",
  messagingSenderId: "666447423815",
  appId: "1:666447423815:web:ccf11dd5a6100ef65a8462"
};


firebase.initializeApp(firebaseConfig);



function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrder();
  const dataBase = firebase.database();
  useTitle(openItem.openItem);
  const dbMenu = useDb(dataBase);
  return (
    <div> 
      <GlobalStyle/>
      <NavBar {...auth} />
      <Order {...orders} {...openItem} {...auth} dataBase={dataBase}/>
      <Menu {...openItem} dbMenu={dbMenu} />
      {
        openItem.openItem &&  <ModalItem {...openItem} {...orders} />
      }
     
    </div>
    
  );
}

export default App;
