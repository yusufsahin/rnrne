import React from 'react';
import styled from 'styled-components/native';

const CardContainer = styled.View`
  background-color: white;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const CardContent = styled.Text`
  font-size: 18px;
  color: #7f8c8d;
`;

const Card = ({ title, content }) => (
  <CardContainer>
    <CardTitle>{title}</CardTitle>
    <CardContent>{content}</CardContent>
  </CardContainer>
);

export default Card;
