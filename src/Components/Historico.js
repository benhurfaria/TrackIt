import styled from "styled-components";

export default function Historico(){
    return (
        <TelaHistorico>
            <div class="topo">
                <p className="title">Track it</p>
                <img src="assets/perfil.png"></img>
            </div>
            <p className="hist">Histórico</p>
            <p className="mensagem">Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            <div className="bottom">
                
            </div>
        </TelaHistorico>
    );
}
const TelaHistorico = styled.div`
    display: flex; 
    flex-direction: column;
    font-family: 'Lexend Deca' , sans-serif;
    .bottom{
        width: 100%;
        height: 70px;
        position: fixed;
        bottom: 0;
        background-color: #FFFFFF;
    }
    .mensagem{
        margin-left: 17px;
        margin-right: 17px;
        margin-top: 20px;
        font-size: 18px;
        color: #666666;
    }
    .hist{
        display: flex;
        flex-direction: column;
        margin-top: 89px;
        margin-left: 17px;
        margin-right: 17px;
        justify-content: space-between;
        color: #126BA5;
        font-size: 23px;
        font-weight: 400;
    }
    .topo{
        font-family: 'Playball', cursive;
        width: 100%;
        height: 70px;
        background-color: #126BA5;
        position: fixed;
        top: 0;
        display: flex;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    }
    .title{
        font-size: 39px;
        margin-left: 18px;
        margin-top: 11px;
        color: #FFFFFF;
    }
    
    img{
        margin-left: 165px;
        width: 51px;
        height: 51px;
        margin-top: 10px;
    }
`;