import './App.css';
import styled from 'styled-components';
import React from 'react';


const Navigation = () => {
    return (
        <Menu>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
            <MenuItem>Item 3</MenuItem>
        </Menu>
    );
};

function App() {
    return (
        <div className="App">
            <Header>
                <Navigation/>
                <LoginBtn>LOGIN</LoginBtn>
            </Header>
            <Block>
                <Title>Accessibility</Title>
            </Block>
        </div>
    );
}

export default App;

const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
  margin: 60px 0;
`;

const Header = styled.div`
  height: 80px;
  background-color: #e91e63;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Block = styled.div`
   flex-grow: 1;
`;

const LoginBtn = styled.div`
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border: 2px solid;
  border-radius: 5px;
`;

const Menu = styled.div`
  display: flex;
  gap: 15px
`;

const MenuItem = styled.div`
  color: white;
  font-weight: bold;
`;



