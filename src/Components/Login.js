import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Login(){
    return (
        <TelaLogin> 
            <img src="/assets/logo.png"/>
            <input type="text" placeholder="email"/>
            <input type="password" placeholder="senha"/>
            <div class="entrar">Entrar</div>
            <Link to="/cadastro" class="enfeite">
                <div class="cadastro">Não tem uma conta? Cadastre-se!</div>
            </Link>
        </TelaLogin>
    );
}
const TelaLogin = styled.div`
    font-family: 'Lexend Deca' , sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .enfeite{
        text-decoration: none;
    }
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
    img{
        margin-top: 100px;
        margin-bottom: 30px;
    }
    .entrar{
        width: 290px;
        height: 45px;
        background-color: #52B6FF;
        margin-top: 30px;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 21px;
    }
    .cadastro{
        margin-top:10px;
        color: #52B6FF;
        font-size: 14px;
    }
`;