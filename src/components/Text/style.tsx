import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';
import SeverityType from '../../types/SeverityType';

type SizeStyleType = {
    default: {
        fontSize: string;
        lineHeight: string;
    };
    compact: {
        lineHeight: string;
    };
};

type SeverityStyleType = {
    color: string;
};

type TextThemeType = {
    default: {
        color: string;
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
    };
    strong: {
        fontWeight: string;
    };
    severity: {
        success: SeverityStyleType;
        warning: SeverityStyleType;
        error: SeverityStyleType;
        info: SeverityStyleType;
    };
    size: {
        small: SizeStyleType;
        base: SizeStyleType;
        large: SizeStyleType;
        extraLarge: SizeStyleType;
    };
};

type PropsType = {
    compact?: boolean;
    descriptive?: boolean;
    strong?: boolean;
    textSize?: 'small' | 'base' | 'large';
    textAlign?: 'left' | 'right' | 'center' | 'justify';
    severity?: SeverityType;
};

const StyledParagraph = withProps<PropsType, HTMLParagraphElement>(styled.p)`
    ${({ textSize, theme, compact }): string => {
        const sizeSet: SizeStyleType = textSize ? theme.Text.size[textSize] : theme.Text.size.base;

        return `
            font-size: ${sizeSet.default.fontSize};
            line-height: ${compact ? sizeSet.compact.lineHeight : sizeSet.default.lineHeight};
        `;
    }}
    color: ${({ severity, theme }): string => {
        if (severity !== undefined && theme.Text.severity[severity] !== undefined) {
            return theme.Text.severity[severity].color;
        }

        return theme.Text.default.color;
    }}
    font-family: ${({ theme }): string => theme.Text.default.fontFamily};
    text-align: ${({ textAlign }): string => (textAlign ? textAlign : '')};
    font-weight: ${({ strong, theme }): string =>
        strong ? theme.Text.strong.fontWeight : theme.Text.default.fontWeight};
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;

const StyledSpan = StyledParagraph.withComponent('span');

export { StyledSpan, StyledParagraph, TextThemeType, SizeStyleType, SeverityStyleType };
