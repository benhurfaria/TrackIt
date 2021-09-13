import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./Components/Login";
import Cadastro from "./Components/Cadastro";
import Habitos from "./Components/Habitos";
import Hoje from "./Components/Hoje";
import Historico from "./Components/Historico";
import "./Estilos/reset.css"
import "./Estilos/style.css"
function App(){
  return(
    <div>
      <BrowserRouter>

        <Switch>
          
          <Route path="/" exact>
            <Login/>
          </Route>

          <Route path="/cadastro">
            <Cadastro/>
          </Route>

          <Route path="/habitos">
            <Habitos/>
          </Route>

          <Route path="/hoje">
            <Hoje/>
          </Route>

          <Route path="/historico">
            <Historico/>
          </Route>
        </Switch>
      
      </BrowserRouter>
    
    
    
    </div>

  );
}

ReactDOM.render(<App/>, document.querySelector(".root"));