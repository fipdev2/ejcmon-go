import styled from 'styled-components/native';
import bg from '../../assets/background.svg';

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
    justify-content: space-between;
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