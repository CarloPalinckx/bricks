import React, { SFC } from 'react';
import Box from '../../Box';
import trbl from '../../../utility/trbl';
import StyledOption from './style';
import Text from '../../Text';
import Icon from '../../Icon';

type PropsType = {
    label: string;
    isSelected: boolean;
    isTargeted: boolean;
    content?: JSX.Element;
    onClick(): void;
    onMouseEnter(): void;
};

type StateType = {
    hovering: boolean;
};

const Option: SFC<PropsType> = (props): JSX.Element => {
    const clickAction = (): void => {
        props.onClick();
    };

    const hoverAction = (): void => {
        props.onMouseEnter();
    };

    return (
        <StyledOption isTargeted={props.isTargeted} onClick={clickAction} onMouseEnter={hoverAction}>
            <Box padding={trbl(6, 18)}>
                {(props.content !== undefined && props.content) || (
                    <Box padding={trbl(6, 18)} alignItems="center" inline>
                        {props.isSelected && (
                            <Box margin={trbl(0, 6, 0, 0)} inline>
                                <Text severity={props.isSelected ? 'info' : undefined}>
                                    <Icon size="small" icon="checkmark" />
                                </Text>
                            </Box>
                        )}
                        <Text severity={props.isSelected ? 'info' : undefined}>{props.label}</Text>
                    </Box>
                )}
            </Box>
        </StyledOption>
    );
};

export default Option;
export { PropsType, StateType };
