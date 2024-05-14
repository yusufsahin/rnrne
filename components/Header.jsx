import React from "react"
import styled from "styled-components/native";

const Header=({title})=>(
<Container>
    <Title>{title}</Title>
</Container>

);
const Container = styled.View`
  height: 60px;
  background-color: #3498db;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
`;

export default Header;