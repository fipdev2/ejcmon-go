import styled from 'styled-components/native';
import bg from '../../assets/background.svg';

export const InputForm = styled.TextInput.attrs({
    placeholderTextColor: "white"
  })`
    background-color:#2B3151;
    width: 333;
    height: 51;
    border-radius: 10;
    margin-bottom: 32;
    font-size: 16;
    color: white;
    padding-left:32;
`

export const Button = styled.TouchableOpacity`
    width: 293;
    height: 55;
    background-color:#FFCD00;
    border-radius: 10;
    align-items: center;
    justify-content: center;
    align-self: center;
`

export const TextButton = styled.Text`
    font-family:Roboto;
    font-weight: 700;
    font-size:20;
    color:#2B3151;
    letter-spacing:1.3;
`

export const BackgroundCadastro = styled.View`
    width: 428;
    height: 926;
    background-image: url(${bg});
`

export const WelcomeText = styled.Text`
    font-family: Roboto;
    font-size: 16;
    font-weight: 400;
    color: #FFFFFF;
    margin-top: 64;
    margin-left: 57;
`

export const LogoApp = styled.Image `
    width: 327;
    height: 218;
    align-self: center;
`

export const Formulario = styled.View`
    align-items: center;
    margin-top: 50;
`

export const Rodape = styled.View`
    flex-direction: row;
    justify-content: center;
    margin-top: 16;
`

export const ChamadaLogin = styled.Text`
    font-family: Roboto;
    font-size: 16;
    font-weight: 700;
    color: #FFFFFF;
`

export const BotaoDeEntrar = styled.Text`
    font-family: Roboto;
    font-size: 16;
    font-weight: 700;
    color: #FFCD00;
    margin-left: 3;
`