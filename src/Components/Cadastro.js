import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Cadastro(){
    return(
        <TelaCadastro>
            <img src="/assets/logo.png"></img>
            <input type="text" placeholder="email"/>
            <input type="password" placeholder="senha"/>
            <input type="text" placeholder="nome"/>
            <input type="text" placeholder="foto"/>
            <div class="Cadastre">Cadastrar</div>
            <Link to="/" class="enfeite">
                <div class="feito">Já tem uma conta? Faça o login!</div>
            </Link>
        </TelaCadastro>
    );
}
const TelaCadastro = styled.div`
    font-family: 'Lexend Deca' , sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img{
        margin-top:100px;
        margin-bottom: 10px;
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
    .feito{
        margin-top:10px;
        color: #52B6FF;
        font-size: 14px;
    }
    .enfeite{
        text-decoration: none;
    }
    input::placeholder{
        color: #DBDBDB;
    }
    .Cadastre{
        width: 290px;
        height: 45px;
        background-color: #52B6FF;
        margin-top: 20px;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 21px;
    }
`;