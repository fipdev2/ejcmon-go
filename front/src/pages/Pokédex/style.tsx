import styled from "styled-components/native";
import { globalStyles } from "../../global/globalStyles";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background: ${globalStyles.colors.primaryPurple};
  position: relative;
  padding: 0 5.65% 0px 5.65%;
`;
export const PokebolaBg = styled.ImageBackground`
  width: 100%;
  height: 60%;
  opacity: 0.1;
  position: absolute;
  top: 0;
  right: 0;
`;
export const Title = styled.Text`
  font-family: ${globalStyles.fonts.r900};
  color: ${globalStyles.colors.yolkYellow};
  font-size: 2rem;
  margin-top: 3.456%;
  margin-bottom: 1.728%;
`;