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
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { Context } from './Components/Functions/context';


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
  const orderConfirm = useOrderConfirm();
  useTitle(openItem.openItem)

  return (
    <Context.Provider value={{
      auth,
      orders,
      openItem
    }}> 
      <GlobalStyle/>
      <NavBar />
      <Order {...orders} {...openItem} {...auth} {...orderConfirm}/>
      <Menu />
      {
        openItem.openItem &&  <ModalItem {...openItem} {...orders} />
      }
      {orderConfirm.openOrderConfirm && <OrderConfirm {...orders} {...auth} {...orderConfirm} firebaseDataBase={firebase.database}/>}
     
    </Context.Provider>
    
  );
}

export default App;
