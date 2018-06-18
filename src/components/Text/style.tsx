import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import { PropsType } from '.';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type TextThemeType = {
    default: {
        color: string;
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
    };
    descriptive: {
        color: string;
    };
    strong: {
        fontWeight: string;
    };
};

const StyledText = withProps<PropsType>(styled.p)`
    color: ${({ descriptive, theme }): string =>
        descriptive ? theme.Text.descriptive.color : theme.Text.default.color};
    font-family: ${({ theme }): string => theme.Text.default.fontFamily};
    font-size: ${({ theme }): string => theme.Text.default.fontSize};
    font-weight: ${({ strong, theme }): string =>
        strong ? theme.Text.strong.fontWeight : theme.Text.default.fontWeight};
    line-height: 1.5;
    margin: 0;
`;

export default StyledText;
export { TextThemeType };