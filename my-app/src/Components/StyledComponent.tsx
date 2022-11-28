import styled from "styled-components";

type InputProps = {
    fontSize: string,
    padding: string,
    border: string,
    width: string,
}

type ButtonProps = {
    backgroundColor: string,
    clr: string,
    padding: string,
    margin: string
}


const Input = styled.input<InputProps>`
  font-size: ${props => props.fontSize || '18px'};
  padding: ${props => props.padding || '10px'};
  margin: {'10px'};
  border: ${props => props.border || 'none'};
  width: ${props => props.width};
  border-radius: {'5px'};
`;

const Button = styled.button<ButtonProps>`
  background-color: ${props => props.backgroundColor || '#063970'};
  color:${props => props.clr || 'white'};
  font-size: 20px;
  padding: ${props => props.padding || '14px 60px'};
  border-radius: 2px;
  margin: ${props => props.margin || '10px 0px'};
  cursor: pointer;
  border:none;
`;
const RadioButton = styled.input`
  curson:pointer;
  width: 25px;
  height: 25px;
  margin: 10px;
`;

export { Input, Button, RadioButton }