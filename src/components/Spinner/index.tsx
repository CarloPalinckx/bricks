import React, { FunctionComponent } from 'react';
import StyledSpinner, { SpinnerSvg, SpinnerCircle, SpinnerPropsType } from './style';

const Spinner: FunctionComponent<SpinnerPropsType> = (props): JSX.Element => (
    <StyledSpinner aria-busy="true" aria-live="polite">
        <SpinnerSvg
            // @ts-ignore
            x="0px"
            y="0px"
            viewBox="0 0 150 150"
            fill="transparent"
            color={props.color}
        >
            <SpinnerCircle cx="75" cy="75" r="60" />
        </SpinnerSvg>
    </StyledSpinner>
);

export default Spinner;
