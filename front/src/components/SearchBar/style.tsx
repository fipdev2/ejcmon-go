import styled from "styled-components/native";
import { globalStyles } from '../../global/globalStyles';

export const SearchWrapper = styled.View`
  width: 100%;
  height: 48px;
  background: ${globalStyles.colors.lightGray};
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 8px 12px 16px;
  border-radius: 8px;
`;
export const Search = styled.TextInput`
  height: 100%;
  width: 100%;
  font-size: 1.25rem;
  font-family: ${globalStyles.fonts.r300};
  outline-style: none;
`;