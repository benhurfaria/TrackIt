import styled from "styled-components";

export default function Habitos(){
    return (
        <TelaHabitos>
            <div class="topo">
                <p className="title">Track it</p>
                <img src="assets/perfil.png"></img>
            </div>
            <div className="parte">
                <h1>Meus hábitos</h1>
                <div class="plus">+</div>
            </div>
            <div className="salvar-habito">
                <input type="text" placeholder="nome do hábito"/>
                <div className="dias">
                    <span className="dia">D</span>
                    <span className="dia">S</span>
                    <span className="dia">T</span>
                    <span className="dia">Q</span>
                    <span className="dia">Q</span>
                    <span className="dia">S</span>
                    <span className="dia">S</span>
                </div>
                <div className="operacao">
                    <span className="cancel">Cancelar</span>
                    <p className="salvar">Salvar</p>
                </div>
            </div>
            <div class="salvas">
                <div class="cime">
                    <span>Ler 1 capítulo de livro</span>
                    <ion-icon name="trash-outline"></ion-icon>
                </div> 
                <div className="dias">
                    <span className="dia">D</span>
                    <span className="dia">S</span>
                    <span className="dia">T</span>
                    <span className="dia">Q</span>
                    <span className="dia">Q</span>
                    <span className="dia">S</span>
                    <span className="dia">S</span>
                </div>
            </div>
            <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>
            <div className="bottom">
                
            </div>
        </TelaHabitos>
    );
}
const TelaHabitos = styled.div`
    display: flex; 
    flex-direction: column;
    font-family: 'Lexend Deca' , sans-serif;
    .cime{
        display: flex;
        justify-content: space-between;
        margin-top: 8px;
    }
    .salvas span{
        margin-left: 15px;
    }
    .salvas{
        margin-left: 10px;
        background-color: #FFFFFF;
        margin-right: 10px;
        margin-top: 20px;
        font-size: 20px;
        color: #666666;
        border-radius: 5px;
        width: 340px;
        height: 81px;
    }

    ion-icon{
        margin-right: 10px;
    }

    .salvar{
        margin-left: 40px;
        border-radius: 5px;
        background-color: #52B6FF;
        color: #FFFFFF;
        font-size: 16px;
        width: 84px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 10px;
        bottom: 10px;
    }
    .operacao{
        margin-top: 60px;
    }
    .cancel{
        margin-left: 148px;
        color: #52B6FF;
    }
    .dia{
        box-sizing: border-box;
        border: 1px solid #D5D5D5;
        margin-left: 17px;
        font-size: 20px;
        border-radius: 5px;

    }
    .dias{
        margin-top: 10px;
        color: #DBDBDB;
    }
    .salvar-habito{
        background-color: #FFFFFF;
        margin-top: 20px;
        margin-left: 10px;
        margin-right: 18px;
        width:340px;
        height: 180px;
        border-radius: 5px;
        position: relative;
    }
    input{
        outline: none;
        width: 310px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        font-size: 20px;
        margin-top: 10px;
        margin-right: 18px;
        margin-left: 17px;
    }
    input::placeholder{
        color: #DBDBDB;
    }
    .bottom{
        width: 100%;
        height: 70px;
        position: fixed;
        bottom: 0;
        background-color: #FFFFFF;
    }
    .parte{
        display: flex;
        margin-top: 89px;
        margin-left: 17px;
        margin-right: 17px;
        justify-content: space-between;
    }
    .plus{
        background-color: #52B6FF;
        border-radius: 5px;
        height: 35px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 27px;
        color: #FFFFFF;
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
    h1{
        
        
        color: #126BA5;
        font-size: 23px;
        font-weight: 400;
    }
    img{
        margin-left: 165px;
        width: 51px;
        height: 51px;
        margin-top: 10px;
    }
    h2{
        margin-left: 17px;
        margin-top: 30px;
        color: #666666;
    }
`;