import styled from "@emotion/styled";
import { css } from "@emotion/core";

import { px2rem } from "../../../utils/styles";
import { COLORS } from "../../../config/styles";
import DeleteIcon from "../../../assets/icons/Delete";
import { spacingStyles, textStyles } from "../Body/Body.styles";

export const Container = styled.div`
  padding-top: ${px2rem(10)};
  display: grid;
`;

export const Comment = styled.div`
  ${spacingStyles};
  display: grid;
  row-gap: ${px2rem(8)};
  ${({ depth }) => {
    if (depth !== 0) {
      return css`
        padding-right: 0;
        border-left: ${px2rem(2)} solid ${COLORS.GRAY_200};
      `;
    }
  }}

  &:last-child {
    padding-bottom: 0;
  }
`;

export const CommentMeta = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  column-gap: ${px2rem(8)};
  font-size: ${px2rem(12)};

  a {
    color: ${COLORS.BLUE_100};
    text-decoration: none;
  }
`;

export const StyledDeleteIcon = styled(DeleteIcon)`
  width: ${px2rem(12)};
  height: ${px2rem(12)};
`;

export const DeleteButton = styled.button`
  fill: ${COLORS.GRAY_400};

  &:hover {
    fill: ${COLORS.GRAY_300};
  }
`;

export const CommentText = styled.p`
  ${textStyles};

  .md {
    display: grid;
    row-gap: ${px2rem(8)};
  }
`;
