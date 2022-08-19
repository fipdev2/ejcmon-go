import styled from "styled-components/native";
import { globalStyles } from "../../global/globalStyles";

export const Container = styled.View`
flex:1;
flex-direction:column;
background:${globalStyles.colors.primaryPurple};
position:relative;
padding: 0 5.65% 0px 5.65%;
`
export const PokebolaBg = styled.ImageBackground`
width:100%
height:60%;
opacity:0.1;
position:absolute;
top:0;
right:0;
`
export const Title = styled.Text`
font-family:${globalStyles.fonts.r900};
color:${globalStyles.colors.yolkYellow};
font-size:2rem;
margin-top:3.456%;
margin-bottom:1.728%;
`
export const SearchWrapper = styled.View`
width:100%;
height:48px;
background:${globalStyles.colors.lightGray};
flex-direction:row;
justify-content:space-between;
padding:12px 8px 12px 16px;
border-radius:8px;

`
export const Search = styled.TextInput`
height:100%;
width:100%;
font-size:1.25rem;
font-family:${globalStyles.fonts.r300};
outline-style:none;
`
export const PokeCard = styled.View`
width:100%;
height:auto;
padding: 28px 19px 28px 28px;
background:${globalStyles.colors.secondaryPurple};
flex-direction:row;
border-radius:25px;
gap:15px;
margin-top:3.456%;
`
export const IconWrapper = styled.View`
height:172px ;
width:160px ;
background: #FF9741;
border-radius:25px;
`

export const PokeIcon = styled.Image`
height:172px ;
width:160px ;
`
export const InfoWrapper = styled.View`
flex-direction:column;
flex:1;
`
export const InfoTop = styled.View`
flex-direction:row;
justify-content:space-between;
align-items:center;
`
export const Type = styled.Image`
height:30px;
width:30px;
`
export const InfoTxt = styled.Text`
font-family:${globalStyles.fonts.r700};
color:white;
font-size:1.25rem;
`
export const Btn = styled.TouchableOpacity`
background-color:${globalStyles.colors.yolkYellow};
border-radius:10px;
flex-direction:row;
align-items:center;
justify-content:space-between;
width:100%;
padding:8px 24px;
margin-top:28%;
`
export const DataWrapper = styled.View`
flex-direction:row;
justify-content:space-evenly;
margin-top:15px;
`

export const Data = styled.View`{
}
`
export const BtnIcon = styled.Image`
height:30px;
width:30px;
`
export const BtnTxt = styled.Text`
font-family: ${globalStyles.fonts.r700};
font-size: 16px;
`
export const DataText = styled.Text`
color: white;
font-size: 16;
font-family: ${globalStyles.fonts.r300};
`
export const YellowText = styled.Text`
color: ${globalStyles.colors.yolkYellow};
font-size: 16px;
font-family: ${globalStyles.fonts.r300};
align-self: center
`


