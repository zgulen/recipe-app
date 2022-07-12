import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    
`;

export const CardDiv = styled.div`
    /* max-width: 30%; */
    padding: 3rem 0;
    background-color: #04BF9D;
    margin: auto;
    padding: 2rem;
    margin: 2rem;
`;

export const Button = styled.button`
  display: block;
  margin: auto;
  margin-top: 1rem;
  align-self: center;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border: none;
    background-color: #F27457;
  outline: 22px double rgba(0, 0, 0, 0.25);
    outline-offset: -10px;
`;

export const StyledButton = styled.form`
  margin-top: 2rem;
`
export const StyledCard = styled.div`
  background-color: #04BF9D ;
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  padding: 3rem 0;
`
export const UL = styled.ul`
  list-style-type: none;
  text-align: right;
`;

export const LI = styled.li`
  list-style-type: none;
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const H3 = styled.h3`
  color: #253659;
  font-weight: 700;
`;






export default Div;