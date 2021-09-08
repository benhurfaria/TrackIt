import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./Components/Login";
import "./Estilos/reset.css"
function App(){
  return(
    <Body>
      <BrowserRouter>
        <Switch>
          
          <Route path="/" exact>
            <Login/>
          </Route>


        </Switch>
      
      </BrowserRouter>
    
    
    
    </Body>

  );
}
const Body = styled.div`
    background-color: #E5E5E5;
    width: 100vw;
    height: 100vh;
`;
ReactDOM.render(<App/>, document.querySelector(".root"));