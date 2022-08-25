import styled from "styled-components/native";
import { globalStyles } from "../../global/globalStyles";

export const Container2 = styled.View`
    flex:1;
    flex-direction:column;
    background:${globalStyles.colors.primaryPurple};
    padding: 0 5.65% 15% 5.65%;
    justify-content: space-between;
`

export const Titulo = styled.Text`
    font-family: ${globalStyles.fonts.r500};
    font-size: 32;
    color: white;
    align-self: left;
`

export const EditInfo = styled.View`
    padding: 0px 25px 0px 25px;
    margin-top: 15%;
    justify-content: space-around;
`

export const FieldInput = styled.TextInput.attrs({
    placeholderTextColor: "white"
})`
    font-family: ${globalStyles.fonts.r300};
    color: white;
    font-size: 24px;
    background: transparent;
    padding: 10px;
    border: 2px solid rgba(250, 250, 250, 0.2);;
    border-radius: 8px;
    margin: 18px 0px 32px 0px;
`