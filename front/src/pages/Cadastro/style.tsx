import styled from 'styled-components/native';
import bg from '../../assets/background.svg';
import { globalStyles } from '../../global/globalStyles';

export const InputForm = styled.TextInput.attrs({
    placeholderTextColor: "white"
})`
    background-color:#2B3151;
    width: 333px;
    height: 51px;
    border-radius: 10px;
    //margin-bottom: 32px;
    font-size: 16px;
    color: white;
    padding-left:32px;
`

export const Button = styled.TouchableOpacity`
    width: 293px;
    height: 55px;
    background-color:#FFCD00;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    align-self: center;
`

export const TextButton = styled.Text`
    font-family:${globalStyles.fonts.r700};
    font-size:20px;
    color:#2B3151;
    letter-spacing:8%;
`

export const BackgroundCadastro = styled.View`
    width: 428px;
    height: 926px;
    background-image: url(${bg});
`

export const WelcomeText = styled.Text`
    font-family: ${globalStyles.fonts.r400}
    font-size: 16px;
    color: #FFFFFF;
    margin-top: 64px;
    margin-left: 57px;
`

export const LogoApp = styled.Image`
    width: 327px;
    height: 218px;
    align-self: center;
`

export const Formulario = styled.View`
    align-items: center;
    margin-top: 50px;
    margin-bottom: 32px;
    height: 400px;
    justify-content: space-between;
`

export const Rodape = styled.View`
    flex-direction: row;
    justify-content: center;
    margin-top: 16px;
`

export const ChamadaLogin = styled.Text`
    font-family: ${globalStyles.fonts.r300};
    font-size: 16px;
    color: #FFFFFF;
`

export const BotaoDeEntrar = styled.Text`
    font-family: ${globalStyles.fonts.r700};
    font-size: 16;
    color: #FFCD00;
    margin-left: 3;
`

export const TextError = styled.Text`
    color: #D65252;
    font-size: 14;
    font-weight: 400;
    font-family: ${globalStyles.fonts.r500};
`