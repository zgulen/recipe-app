import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  gap: 1rem;
  list-style-type: none;
  margin-top: 2rem;
  text-decoration: none;
`;

export const Nav = styled.nav`
 display: flex;
 justify-content: space-between;
 background-color: blanchedalmond;
 padding: 1rem;
 `;

export const LI = styled.li`
  text-decoration: none;
  & > a{
    color: black;
    text-decoration: none;
    font-size:1.3rem;
    &:hover{
        border-bottom: 2px solid black;
    }
  }
`;




export default Ul;