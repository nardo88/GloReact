import React from 'react';
import { createGlobalStyle  } from 'styled-components';
import { NavBar } from './Components/NavBar';

const GlobalStyle = createGlobalStyle`
 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f0f0f0;
    font-family: Roboto, sans-serif;
    font-size: 20px;
    color: black;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style-type: none;
  }

  h1, h2, h3 {
    font-family: Pacifico, sans-serif;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`

function App() {
  return (
    <div> 
      <GlobalStyle/>
      <NavBar />
    </div>
    
  );
}

export default App;
