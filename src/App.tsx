import React from "react";
import styled from "styled-components";



const Header = styled.div`
  height: 50px;
  margin: auto;
  background-color: #081C64;
  padding-left: 15px;
  display: flex;
  align-items: center;
  font-size: 1.5em;
  color: white;
`;


function App() {
  return (
    <>
      <Header>Plezi</Header>
    </>
  );
}

export default App;
