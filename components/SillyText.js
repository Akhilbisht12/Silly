import styled from 'styled-components/native';
const SillyText = styled.Text`
  font-size: ${prop => (prop.size ? prop.size : 14)}px;
  font-weight: ${prop => (prop.fw ? prop.fw : '500')};
  color: ${prop => (prop.color ? prop.color : 'lightgray')};
  padding-top: ${prop => (prop.py ? prop.py : 0)}px;
  padding-bottom: ${prop => (prop.py ? prop.py : 0)}px;
  padding-right: ${prop => (prop.px ? prop.px : 0)}px;
  padding-left: ${prop => (prop.px ? prop.px : 0)}px;
  margin-top: ${prop => (prop.my ? prop.my : 0)}px;
  margin-bottom: ${prop => (prop.my ? prop.my : 0)}px;
  margin-right: ${prop => (prop.mx ? prop.mx : 0)}px;
  margin-left: ${prop => (prop.mx ? prop.mx : 0)}px;
`;
export default SillyText;
