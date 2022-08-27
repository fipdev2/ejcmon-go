import styled from 'styled-components/native';
import { globalStyles } from "../../global/globalStyles";

export const Card = styled.View`
  width: 100%;
  height: auto;
  padding: 28px 19px 28px 28px;
  background: ${globalStyles.colors.secondaryPurple};
  flex-direction: row;
  border-radius: 25px;
  gap: 15px;
  margin-top: 3.456%;
`;
export const IconWrapper = styled.View`
  height: 172px;
  width: 160px;
  background: #ff9741;
  border-radius: 25px;
`;

export const PokeIcon = styled.Image`
  height: 172px;
  width: 160px;
`;
export const InfoWrapper = styled.View`
  flex-direction: column;
  flex: 1;
`;
export const InfoTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Type = styled.Image`
  height: 30px;
  width: 30px;
`;
export const InfoTxt = styled.Text`
  font-family: ${globalStyles.fonts.r700};
  color: white;
  font-size: 1.25rem;
`;
export const Btn = styled.TouchableOpacity`
  background-color: ${globalStyles.colors.yolkYellow};
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 24px;
  margin-top: 28%;
`;
export const DataWrapper = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 15px;
`;

export const Data = styled.View``;
export const BtnIcon = styled.Image`
  height: 30px;
  width: 30px;
`;
export const BtnTxt = styled.Text`
  font-family: ${globalStyles.fonts.r700};
  font-size: 16px;
`;
export const DataText = styled.Text`
  color: white;
  font-size: 16;
  font-family: ${globalStyles.fonts.r300};
`;
export const YellowText = styled.Text`
  color: ${globalStyles.colors.yolkYellow};
  font-size: 16px;
  font-family: ${globalStyles.fonts.r300};
  align-self: center;
`;

export const BtnsWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 28%;
`;