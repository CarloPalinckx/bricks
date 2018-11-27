import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../../types/ThemeType';
import styled, { withProps } from '../../../utility/_styled';
import StyledCell from '../Cell/style';

type StyledRowProps = {
    ref?: HTMLElement;
    dragging?: boolean;
    focus?: boolean;
};

const StyledRow = withProps<StyledRowProps>(styled.tr)`
    background-color: ${({ theme }): string => theme.Table.row.default.backgroundColor};
    transition: background-color 300ms;
    text-align: left;
    border-spacing: 0 1px;
    box-sizing: border-box;
    position: relative;
    box-shadow: ${({ dragging, theme }): string =>
        dragging ? theme.Table.row.dragging.boxShadow : '0 0 0 rgba(0,0,0,0)'};
    outline: ${({ focus, theme }): string => (focus ? `solid 4px ${theme.Table.row.focus.borderColor}` : '')};

    &:hover {
        background-color: ${({ theme }): string => theme.Table.row.hover.backgroundColor};
    }

    ${StyledCell} {
        ${({ dragging }): string => {
            // this is a hack to force (IE11 mostly) td's to wrap text in combination with flex-box
            return dragging !== true ? 'max-width: 1px' : '';
        }}
`;

export default StyledRow;
export { StyledRowProps };
