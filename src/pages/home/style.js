import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;



export const CardDiv = styled.div`
    max-width: 30%;
    padding: 3rem 0;
`;

export const Button = styled.button`
display: block;
margin: auto;
margin-top: 1rem;
align-self: center;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border: none;
  background-color: thistle;
outline: 22px double rgba(0, 0, 0, 0.25);
	outline-offset: -10px;
`;





export default Div;