import styled, { withProps } from '../../../src/utility/styled';
import _T from '../../types/ThemeType';
import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';

type SelectThemeType = {
    common: {
        secondaryColor: string;
        borderRadius: string;
    };
    input: {
        borderColor: string;
        color: string;
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        background: string;
    };
    wrapper: {
        common: {
            borderColor: string;
        };
        focus: {
            boxShadow: string;
        };
    };
    placeholder: {
        color: string;
    };
};

type WrapperProps = {
    isOpen: boolean;
};

const StyledWrapper = withProps<WrapperProps, HTMLDivElement>(styled.div)`
    transition: all .3s;
    outline: none;
    display: inline-block;
    background: #fff;
    position: relative;
    border-radius: ${({ theme }): string => theme.Select.common.borderRadius};

    &:focus {
        box-shadow: ${({ theme }): string => theme.Select.wrapper.focus.boxShadow}
    }

    &:before {
        content: '';
        z-index: -1;
        border-radius: ${({ theme }): string => theme.Select.common.borderRadius};
        ${({ isOpen }): string =>
            isOpen
                ? `
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                `
                : ''}
        border: ${({ theme, isOpen }): string =>
            isOpen
                ? `solid 1px ${theme.Select.wrapper.common.borderColor}`
                : `solid 0px ${theme.Select.common.secondaryColor}`};
        border-bottom: none;
        background: ${({ theme }): string => theme.Select.common.secondaryColor};
        position: absolute;
        top: ${({ isOpen }): string => (isOpen ? '-6px' : '0')};
        left: ${({ isOpen }): string => (isOpen ? '-6px' : '0')};
        right: ${({ isOpen }): string => (isOpen ? '-6px' : '0')};
        bottom: ${({ isOpen }): string => (isOpen ? '-6px' : '0')};
    }
`;

type WindowProps = {
    isOpen: boolean;
};

const StyledWindow = withProps<WindowProps, HTMLDivElement>(styled.div)`
    position: absolute;
    max-height: 240px;
    overflow: hidden;
    top: calc(100% + 6px);
    padding-top: 6px;
    right: -6px;
    left: -6px;
    border: ${({ theme, isOpen }): string =>
        isOpen ? `solid 1px ${theme.Select.wrapper.common.borderColor}` : 'solid 2px transparent'};
    border-top: none;
    border-radius: ${({ theme }): string => theme.Select.common.borderRadius};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    ${({ isOpen }): string => (!isOpen ? 'cursor: pointer' : '')};
`;

const StyledInput = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 0 0 0 12px;
    border: solid 1px ${({ theme }): string => theme.Select.input.borderColor};
    background: ${({ theme }): string => theme.Select.input.background};
    border-radius: ${({ theme }): string => theme.Select.common.borderRadius};

    input {
        appearance: none;
        outline: none;
        border: none;
        flex-grow: 1;
        color: ${({ theme }): string => theme.Select.input.color};
        font-size: ${({ theme }): string => theme.Select.input.fontSize};
        font-family: ${({ theme }): string => theme.Select.input.fontFamily};
        color: ${({ theme }): string => theme.Select.input.fontFamily};

        &::placeholder {
            color: ${({ theme }): string => theme.Select.placeholder.color};
        }
    }
`;

export { StyledWrapper, StyledInput, StyledWindow, SelectThemeType };
