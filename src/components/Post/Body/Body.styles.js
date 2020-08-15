import styled from "@emotion/styled";
import { css } from "@emotion/core";

import { px2rem } from "../../../utils/styles";
import { COLORS } from "../../../config/styles";
import CommentIcon from "../../../assets/icons/Comment";

export const spacingStyles = css`
  padding: ${px2rem([20, 40])};
`;

export const textStyles = css`
  font-size: ${px2rem(14)};
  line-height: 1.4;
  color: ${COLORS.GRAY_500};
`;

export const Container = styled.div`
  background: ${COLORS.WHITE};
  padding: ${px2rem([20])};
  border-radius: ${px2rem([8])};
`;

export const Text = styled.div`
  ${spacingStyles};
  ${textStyles};

  background: ${COLORS.GRAY_200};
  border-radius: ${px2rem([8])};

  .md {
    display: grid;
    row-gap: ${px2rem(16)};
  }
`;

export const CommentsCount = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
  padding-top: ${px2rem(20)};
  column-gap: ${px2rem(8)};
  font-size: ${px2rem(12)};
  color: ${COLORS.GRAY_400};
`;

export const StyledCommentIcon = styled(CommentIcon)`
  width: ${px2rem(12)};
  height: ${px2rem(12)};
  fill: ${COLORS.GRAY_400};
`;
