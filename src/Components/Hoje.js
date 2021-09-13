import styled from "styled-components";

export default function Hoje(){
    return(
        <TelaHoje>
            <div class="topo">
                <p className="title">Track it</p>
                <img src="assets/perfil.png"></img>
            </div>
            <div className="parte">
                <h1>Segunda, 17/05</h1>
                <h2>Nenhum hábito concluído ainda</h2>
            </div>
            <div className="cumprir">
                <p className="tarefa">Ler 1 capítulo de livro</p>
                <p className="sequencia">Sequência atual: 3 dias</p>
                <p className="sequencia">Seu recorde: 5 dias</p>
                <div className="verificado">
                    <ion-icon name="checkmark-sharp"></ion-icon>
                </div>
            </div>
            <div className="cumprir">
                <p className="tarefa">Ler 1 capítulo de livro</p>
                <p className="sequencia">Sequência atual: 3 dias</p>
                <p className="sequencia">Seu recorde: 5 dias</p>
                <div className="verificado">
                    <ion-icon name="checkmark-sharp"></ion-icon>
                </div>
            </div>
            <div className="bottom">
                
            </div>
        </TelaHoje>
    );
}
const TelaHoje = styled.div`
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
    .verificado{
        position: absolute;
        width:69px;
        height: 69px;
        background-color: #EBEBEB;
        bottom: 8px;
        right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        color: #FFFFFF;
    }
    .sequencia{
        font-size: 13px;
        margin-left: 15px;
        margin-top: 5px;
    }
    .tarefa{
        margin-top: 13px;
        margin-left: 15px;
    }
    .cumprir{
        width: 320px;
        height: 85px;
        background-color: #FFFFFF;
        margin-left:17px;
        border-radius: 5px;
        margin-top: 20px;
        color: #666666;
        position: relative;
    }
    h2{
        margin-top: 10px;
        color: #BABABA;
        font-size: 18px;
    }
    h1{
        
        
        color: #126BA5;
        font-size: 23px;
        font-weight: 400;
    }
    .parte{
        display: flex;
        flex-direction: column;
        margin-top: 89px;
        margin-left: 17px;
        margin-right: 17px;
        justify-content: space-between;
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