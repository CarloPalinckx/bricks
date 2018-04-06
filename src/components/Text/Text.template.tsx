import React, { StatelessComponent } from 'react';
import { StyledType } from '../../utility/styled';

type PropsType = StyledType & {};

const Text:StatelessComponent<PropsType> = (props):JSX.Element => (
    <p className={props.className}>{props.children}</p>
);

export default Text;
export {
    PropsType,
};