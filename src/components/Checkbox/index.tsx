import React, { Component } from 'react';
import Icon from '../Icon';
import StyledCheckbox, { StyledCheckboxSkin } from './style';
import Box from '../Box';

type StateType = {
    focus: boolean;
};

type PropsType = {
    checked: boolean;
    value: string;
    name: string;
    changeHandler(change: { checked: boolean }): void;
};

class Checkbox extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);

        this.state = {
            focus: false,
        };
    }

    public handleChange = (): void => {
        this.props.changeHandler({
            checked: !this.props.checked,
        });
    };

    public toggleFocus = (): void => {
        this.setState({ focus: !this.state.focus });
    };

    public render(): JSX.Element {
        return (
            <StyledCheckboxSkin
                onClick={this.handleChange}
                elementFocus={this.state.focus}
                checked={this.props.checked}
            >
                <Box justifyContent="center" alignItems="center" height="100%">
                    {this.props.checked && <Icon size="small" color="#fff" icon="checkmark" />}
                </Box>
                <StyledCheckbox
                    onFocus={this.toggleFocus}
                    onBlur={this.toggleFocus}
                    name={this.props.name}
                    value={this.props.value}
                    checked={this.props.checked}
                    type="checkbox"
                    onChange={this.handleChange}
                />
            </StyledCheckboxSkin>
        );
    }
}

export default Checkbox;
export { PropsType, StateType };
