import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';
import SeverityType from '../../types/SeverityType';

type ToasterPropsType = {
    severity: SeverityType;
};

type ToasterThemeType = {
    borderRadius: string;
    backgroundColor: string;
};

const StyledToasterWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 36px;
`;

const StyledToaster = withProps<ToasterPropsType, HTMLDivElement>(styled.div)`
    display: flex;
    transition: opacity 100ms, box-shadow 100ms;
    box-sizing: border-box;
    max-width: 792px;
    align-items: center;
    border-radius: ${({ theme }): string => theme.Toaster.borderRadius}
    background-color: ${({ theme }): string => theme.Toaster.backgroundColor}
    border-left: ${({ severity, theme }): string => `4px solid ${theme.Text.severity[severity].color};`}
`;

export default StyledToaster;
export { ToasterPropsType, StyledToasterWrapper, ToasterThemeType };
