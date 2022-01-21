import styled from 'styled-components/native';
const SillyButton = styled.TouchableOpacity`
  background-color: ${prop => (prop.bg ? prop.bg : 'none')};
  color: ${prop => (prop.color ? prop.color : 'black')};
  border-radius: ${prop => (prop.round ? prop.round : 5)}px;
  padding: ${prop => (prop.py ? prop.py : 10)}px
    ${prop => (prop.px ? prop.px : 20)}px;
  margin: ${prop => (prop.my ? prop.my : 5)}px
    ${prop => (prop.mx ? prop.mx : 5)}px;
`;
export default SillyButton;
