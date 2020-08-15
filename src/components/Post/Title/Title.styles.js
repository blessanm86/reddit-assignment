import styled from "@emotion/styled";
import px2rem from "../../../utils/styles";
import { COLORS } from "../../../config/styles";

export const Container = styled.div`
  padding: ${px2rem([0, 20])};
`;

export const SubRedditTitle = styled.span`
  color: ${COLORS.GRAY_300};
  font-size: ${px2rem(12)};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: baseline;
  margin: ${px2rem([15, 0])};
`;

export const Score = styled.span`
  color: ${COLORS.GRAY_400};
`;

export const Title = styled.h3`
  color: ${COLORS.GRAY_400};
  margin-left: ${px2rem(15)};
`;
