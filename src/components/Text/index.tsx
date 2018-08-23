import React, { StatelessComponent } from 'react';
import { StyledType } from '../../utility/styled';
import { StyledSpan, StyledParagraph } from './style';
import SeverityType from '../../types/SeverityType';

type PropsType = StyledType & {
    compact?: boolean;
    strong?: boolean;
    inline?: boolean;
    size?: 'small' | 'base' | 'large';
    textAlign?: 'left' | 'right' | 'center' | 'justify';
    severity?: SeverityType;
};

const Text: StatelessComponent<PropsType> = (props): JSX.Element => {
    const Element = props.inline !== undefined && props.inline ? StyledSpan : StyledParagraph;

    return (
        <Element
            textSize={props.size}
            strong={props.strong}
            compact={props.compact}
            textAlign={props.textAlign}
            severity={props.severity}
        >
            {props.children}
        </Element>
    );
};

export default Text;
export { PropsType };
