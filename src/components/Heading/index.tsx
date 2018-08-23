import React, { StatelessComponent } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { StyledType } from '../../utility/styled';

type HeadingHierarchyThemeType = {
    color: string;
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
    textTransform: string;
};

type HeadingThemeType = StyledType & {
    hierarchy: {
        hierarchy1: HeadingHierarchyThemeType;
        hierarchy2: HeadingHierarchyThemeType;
        hierarchy3: HeadingHierarchyThemeType;
        hierarchy4: HeadingHierarchyThemeType;
        hierarchy5: HeadingHierarchyThemeType;
        hierarchy6: HeadingHierarchyThemeType;
        [key: string]: HeadingHierarchyThemeType;
    };
};

type PropsType = StyledType & {
    hierarchy?: 1 | 2 | 3 | 4 | 5 | 6;
    element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span' | 'p';
    textAlign?: 'left' | 'right' | 'center' | 'justify';
};

const HeadingElement: StatelessComponent<PropsType> = (props): JSX.Element => {
    const Element = props.element !== undefined ? `${props.element}` : 'div';

    return (
        <Element role="heading" className={props.className}>
            {props.children}
        </Element>
    );
};

const StyledHeading = styled(HeadingElement)`
    color: ${({ hierarchy, theme }): string =>
        !hierarchy ? theme.Heading.hierarchy.hierarchy1.color : theme.Heading.hierarchy[`hierarchy${hierarchy}`].color};
    font-family: ${({ hierarchy, theme }): string =>
        !hierarchy
            ? theme.Heading.hierarchy.hierarchy1.fontFamily
            : theme.Heading.hierarchy[`hierarchy${hierarchy}`].fontFamily};
    font-size: ${({ hierarchy, theme }): string =>
        !hierarchy
            ? theme.Heading.hierarchy.hierarchy1.fontSize
            : theme.Heading.hierarchy[`hierarchy${hierarchy}`].fontSize};
    font-weight: ${({ hierarchy, theme }): string =>
        !hierarchy
            ? theme.Heading.hierarchy.hierarchy1.fontWeight
            : theme.Heading.hierarchy[`hierarchy${hierarchy}`].fontWeight};
    line-height: ${({ hierarchy, theme }): string =>
        !hierarchy
            ? theme.Heading.hierarchy.hierarchy1.lineHeight
            : theme.Heading.hierarchy[`hierarchy${hierarchy}`].lineHeight};
    text-transform: ${({ hierarchy, theme }): string =>
        !hierarchy
            ? theme.Heading.hierarchy.hierarchy1.textTransform
            : theme.Heading.hierarchy[`hierarchy${hierarchy}`].textTransform}
    text-align: ${({ textAlign }): string => (textAlign !== undefined ? textAlign : '')};
    margin: 0;
    -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`;

export default StyledHeading;
export { PropsType, HeadingThemeType, HeadingHierarchyThemeType };
