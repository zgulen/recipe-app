import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style-type: none;
  margin-top: 2rem;
  text-decoration: none;
  padding-right: 3rem;
`;

export const Nav = styled.nav`
 display: flex;
 justify-content: space-between;
 background-color: #253659;
 padding: 1rem;
 /* width: 100%; */
 `;

export const LI = styled.li`
  text-decoration: none;
  & > a{
    color: white;
    text-decoration: none;
    font-size:1.4rem;
    &:hover{
        border-bottom: 2px solid #BF665E;
    }
  }
`;




export default Ul;