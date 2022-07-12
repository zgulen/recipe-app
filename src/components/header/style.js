import styled from 'styled-components';



export const Div = styled.div`
    height: 100vh;
    background-image: url(https://picsum.photos/1600/900);
    background-size: cover;
    background-position: center;
    color: #253659;
    font-size: 1.3rem;
`;

export const Input = styled.input`
    padding: 1rem;
    margin-left: auto;
    border-radius: 5px;
`;
export const Button = styled.button`
    padding: .7rem 2rem;
    margin-top: 2rem;
    background-color: #253659;
    border: 1px solid #F27457;
    box-shadow: 1px 1px 1px 3px rgba(0,0,0,0.5);
    color: #BF665E;
    font-size: 1.2rem;
`;

const StyledForm = styled.form`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    width: 270px;
    gap:1rem;
    align-items: center;
    margin: auto;
    padding: 3rem 0;
    background-color: #BF665E;
    border-radius: 10px;
`;


export default StyledForm;
