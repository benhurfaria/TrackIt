import styled from "styled-components";
export default function Login(){
    return (
        <TelaLogin> 
            <p>TrackIt</p>
            <input type="text" placeholder="email"/>
            <input type="text" placeholder="senha"/>
            <div class="entrar"></div>
        </TelaLogin>
    );
}
const TelaLogin = styled.div`
    font-family: 'Playball', cursive;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        font-size: 69px;
        color: #126BA5;
    }
    input{
        outline: none;
        width: 290px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        font-size: 20px;
        margin-top: 10px;
    }
    input::placeholder{
        color: #DBDBDB;
    }
    
    .entrar{
        width: 290px;
        height: 45px;
        background-color: #52B6FF;
        margin-top: 20px;
    }
`;