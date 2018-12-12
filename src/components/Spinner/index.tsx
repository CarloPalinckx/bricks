import React, { FunctionComponent } from 'react';
import StyledSpinner, { SpinnerSvg, SpinnerCircle } from './style';

type PropsType = {
    color: string;
};

const Spinner: FunctionComponent<PropsType> = (props): JSX.Element => (
    <StyledSpinner aria-busy="true" aria-live="polite">
        <SpinnerSvg
            // @ts-ignore
            viewBox="0 0 150 150"
            color={props.color}
        >
            <SpinnerCircle className="spinnerCircle" cx="75" cy="75" r="60" />
        </SpinnerSvg>
    </StyledSpinner>
);

export default Spinner;
export { PropsType };
