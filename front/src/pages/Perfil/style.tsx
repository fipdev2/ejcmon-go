import styled from "styled-components/native";
import { globalStyles } from "../../global/globalStyles";

export const Btn = styled.TouchableOpacity`
  background-color: ${globalStyles.colors.yolkYellow};
  align-self: center;
  justify-content: center;
  align-items: center;
  padding: 16px 84px;
  border-radius: 10px;
  margin-bottom: 6%;
`;
export const BtnTxt = styled.Text`
  font-family: ${globalStyles.fonts.r700};
  letter-spacing: 8%;
`;
export const InfoTitle = styled.Text`
  font-family: ${globalStyles.fonts.r500};
  font-size: 2rem;
  color: ${globalStyles.colors.offWhite};
  margin-bottom: 8px;
`;
export const Info = styled.Text`
  font-family: ${globalStyles.fonts.r300};
  font-size: 1.5rem;
  color: ${globalStyles.colors.offWhite};
  margin-bottom: 3.5%;
`;
