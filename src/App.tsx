import React from "react";
import styled from "styled-components";
import Theme from "./Theme";
import getPopularMovies from "./hooks/getPopularMovies";



const Header = styled.div`
  height: 50px;
  margin: auto;
  background-color: ${props => props.theme.colors.secondary};
  padding-left: 15px;
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.medium};
  color: white;
`;


function App() {
  const { error, response, isLoading } = getPopularMovies();

  console.log(error, response, isLoading);

  return (
    <Theme>
      <Header>PLEZI</Header>
    </Theme>
  );
}

export default App;
