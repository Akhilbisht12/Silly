import styled from 'styled-components/native';
import {clr3} from '../../config/globals';
const SillyInput = styled.TextInput`
  background-color: ${prop => (prop.bg ? prop.bg : clr3)};
  color: ${prop => (prop.color ? prop.color : 'black')};
  border-radius: ${prop => (prop.round ? prop.round : 10)}px;
  padding-top: ${prop => (prop.py ? prop.py : 5)}px;
  padding-bottom: ${prop => (prop.py ? prop.py : 5)}px;
  padding-right: ${prop => (prop.px ? prop.px : 10)}px;
  padding-left: ${prop => (prop.px ? prop.px : 10)}px;
  margin-top: ${prop => (prop.my ? prop.my : 5)}px;
  margin-bottom: ${prop => (prop.my ? prop.my : 5)}px;
  margin-right: ${prop => (prop.mx ? prop.mx : 0)}px;
  margin-left: ${prop => (prop.mx ? prop.mx : 0)}px;
  height: ${prop => (prop.height ? prop.height : 55)}px;
  width: ${prop => (prop.width ? prop.width : '100%')};
`;
export default SillyInput;
