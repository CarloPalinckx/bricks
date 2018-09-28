import React, { ChangeEvent, Component } from 'react';
import SeverityType from '../../types/SeverityType';
import trbl from '../../utility/trbl';
import InlineNotification from '../InlineNotification';
import Box from '../Box';
import { StyledInput, StyledWrapper, StyledAffix, StyledAffixWrapper } from './style';
import withCurrencyFormatting, { WithCurrencyFormattingType } from './formatters/withCurrencyFormatting';

type PropsType = {
    value: string;
    name: string;
    id?: string;
    feedback?: {
        severity: SeverityType;
        message: string;
    };
    prefix?: string;
    suffix?: string;
    disabled?: boolean;
    extractRef?(ref: HTMLInputElement): void;
    onChange(value: string, event: ChangeEvent<HTMLInputElement>): void;
    onBlur?(): void;
    onFocus?(): void;
};

type StateType = {
    focus: boolean;
};

class TextField extends Component<PropsType, StateType> {
    public static Currency: WithCurrencyFormattingType = withCurrencyFormatting(TextField);

    private inputRef: HTMLInputElement;

    public constructor(props: PropsType) {
        super(props);

        this.state = {
            focus: false,
        };
    }

    public handleFocus = (): void => {
        this.setState({
            focus: true,
        });
        this.inputRef.focus();

        if (this.props.onFocus !== undefined) this.props.onFocus();
    };

    public handleBlur = (): void => {
        this.setState({
            focus: false,
        });

        if (this.props.onBlur !== undefined) this.props.onBlur();
    };

    public onChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (!this.props.disabled) this.props.onChange(event.target.value, event);
    };

    public render(): JSX.Element {
        return (
            <>
                <StyledWrapper
                    focus={this.state.focus}
                    disabled={this.props.disabled}
                    feedback={this.props.feedback}
                    onFocusCapture={this.handleFocus}
                    onBlurCapture={this.handleBlur}
                    onClick={this.handleFocus}
                >
                    {this.props.prefix && (
                        <StyledAffixWrapper disabled={this.props.disabled}>
                            <StyledAffix>{this.props.prefix}</StyledAffix>
                        </StyledAffixWrapper>
                    )}
                    <StyledInput
                        type="text"
                        name={this.props.name}
                        disabled={this.props.disabled}
                        value={this.props.value}
                        id={this.props.id}
                        focus={this.state.focus}
                        onChange={this.onChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        innerRef={(ref): void => {
                            this.inputRef = ref;
                            if (this.props.extractRef !== undefined) {
                                this.props.extractRef(ref);
                            }
                        }}
                    />
                    {this.props.suffix && (
                        <StyledAffixWrapper disabled={this.props.disabled}>
                            <StyledAffix>{this.props.suffix}</StyledAffix>
                        </StyledAffixWrapper>
                    )}
                </StyledWrapper>
                {this.props.feedback && (
                    <Box margin={trbl(6, 0, 0, 12)}>
                        <InlineNotification
                            icon={this.props.feedback.severity === 'info' ? 'questionCircle' : 'dangerCircle'}
                            message={this.props.feedback.message}
                            severity={this.props.feedback.severity}
                        />
                    </Box>
                )}
            </>
        );
    }
}

export default TextField;
export { PropsType, StateType };
