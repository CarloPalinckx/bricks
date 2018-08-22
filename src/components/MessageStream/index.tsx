import React, { Fragment, StatelessComponent } from 'react';
import { StyledType } from '../../utility/styled';
import trbl from '../../utility/trbl';
import Box from '../Box';
import Button, { PropsType as ButtonPropsType } from '../Button';
import Contrast from '../Contrast';
import Text from '../Text';
import StyledMessageStream, { MessageSeparator, StyledMessage } from './style';

export type MessagePropsType = StyledType & {
    severity: 'success' | 'info' | 'warning' | 'error';
    title: string;
    message: string;
    buttonLabel?: string;
    date?: string;
    read?: boolean;
    action?(): void;
};

type PropsType = StyledType & {
    messages: Array<MessagePropsType>;
};

const mapVariant = (severity: MessagePropsType['severity']): ButtonPropsType['variant'] => {
    switch (severity) {
        case 'warning':
            return 'warning';
        case 'error':
            return 'destructive';
        case 'info':
            return 'secondary';
        case 'success':
        default:
            return 'primary';
    }
};

const Message: StatelessComponent<MessagePropsType> = (props): JSX.Element => {
    const variant = mapVariant(props.severity);

    return (
        <StyledMessage title={props.title} severity={props.severity}>
            <Contrast enable={props.read}>
                <Box padding={trbl(6, 12)} wrap alignItems="center" alignContent="flex-start">
                    <Box direction="column" grow={1} basis={'250px'} margin={trbl(0, 12, 0, 0)}>
                        <Text strong>{props.title}</Text>
                        <Text>
                            <span dangerouslySetInnerHTML={{ __html: props.message }} />
                        </Text>
                        <Text descriptive>{props.date}</Text>
                    </Box>
                    {props.action !== undefined && props.buttonLabel !== undefined && props.buttonLabel.length > 0 ? (
                        <Box
                            direction="column"
                            basis="auto"
                            justifyContent="center"
                            alignItems="flex-end"
                            margin={trbl(3, 0)}
                        >
                            <Button
                                title={props.buttonLabel}
                                variant={variant}
                                action={(): void => {
                                    (props.action as Function)();
                                }}
                            >
                                {props.buttonLabel}
                            </Button>
                        </Box>
                    ) : (
                        undefined
                    )}
                </Box>
            </Contrast>
        </StyledMessage>
    );
};

const MessageStream: StatelessComponent<PropsType> = (props): JSX.Element => (
    <StyledMessageStream>
        {props.messages.map((message: MessagePropsType, index: number): JSX.Element => (
            <Fragment key={`${message.date}-${message.title}`}>
                <Message {...message} />
                {index < props.messages.length - 1 ? <MessageSeparator /> : undefined}
            </Fragment>
        ))}
    </StyledMessageStream>
);

export default MessageStream;
export { PropsType, Message };
