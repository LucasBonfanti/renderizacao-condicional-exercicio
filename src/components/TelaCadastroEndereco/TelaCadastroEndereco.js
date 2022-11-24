import React from "react";
import { Input, RegisterButton, SendButton, StyledLabel } from "../TelaLogin/styled";
import { FormularioContainer } from "./styled";

function TelaCadastroEndereco(props) {
  
    return (
  <>
   <FormularioContainer>
   <h1>Cadastro de Endereço</h1>
   <form>
    <StyledLabel>
        Endereço:
        <Input/>
    </StyledLabel>
    <StyledLabel>
        Número:
        <Input/>
    </StyledLabel>
    <StyledLabel>
        Telefone:
        <Input/>
    </StyledLabel>
    <StyledLabel>
        Complemento:
        <Input/>
    </StyledLabel>
    <SendButton onClick={() => props.mudarTela(4)}>Próxima Página</SendButton>
   </form>

   </FormularioContainer>
      
  </>
    );
  }
  
  export default TelaCadastroEndereco;
  