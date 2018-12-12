import React, { Children, FunctionComponent } from 'react';
import StyledButton, { StyledAnchor } from './style';
import Icon, { MediumPropsType } from '../Icon';
import Box from '../Box';
import trbl from '../../utility/trbl';
import Spinner from '../Spinner';

type PropsType = {
    id?: string;
    title: string;
    href?: string;
    color?: string;
    flat?: boolean;
    compact?: boolean;
    loading?: boolean;
    disabled?: boolean;
    className?: string;
    iconAlign?: 'right' | 'left';
    icon?: MediumPropsType['icon'];
    target?: HTMLAnchorElement['target'];
    variant: 'primary' | 'destructive' | 'warning' | 'secondary' | 'plain';
    action?(): void;
};

type ButtonContentsType = {
    title: PropsType['title'];
    icon?: PropsType['icon'];
    iconAlign?: PropsType['iconAlign'];
};

const ButtonContents: FunctionComponent<ButtonContentsType> = (props): JSX.Element => (
    <>
        {props.icon &&
            props.iconAlign !== 'right' && (
                <Box inline padding={trbl(0, 6, 0, 0)}>
                    <Icon icon={props.icon} size={'medium'} />
                </Box>
            )}
        {Children.count(props.children) > 0 ? props.children : props.title}
        {props.icon &&
            props.iconAlign === 'right' && (
                <Box inline padding={trbl(0, 0, 0, 6)}>
                    <Icon icon={props.icon} size={'medium'} />
                </Box>
            )}
    </>
);

const Button: FunctionComponent<PropsType> = (props): JSX.Element => {
    const isLink = props.href !== undefined;

    const clickAction = (): void => {
        if (props.action !== undefined && props.disabled !== true && props.loading !== true) {
            props.action();
        }
    };

    if (isLink) {
        return (
            <StyledAnchor
                loading={props.loading}
                variant={props.variant}
                compact={props.compact}
                title={props.title}
                className={props.className}
                href={props.href}
                target={props.target}
                disabled={props.disabled}
                flat={props.flat}
                id={props.id}
            >
                {(props.loading && (
                    <Box alignItems="center" minHeight={props.icon ? '28px' : '21px'} minWidth="21px">
                        <Spinner color={'currentColor'} />
                    </Box>
                )) || (
                    <ButtonContents title={props.title} icon={props.icon} iconAlign={props.iconAlign}>
                        {props.children}
                    </ButtonContents>
                )}
            </StyledAnchor>
        );
    }

    return (
        <StyledButton
            type="button"
            id={props.id}
            icon={props.icon}
            flat={props.flat}
            color={props.color}
            title={props.title}
            onClick={clickAction}
            loading={props.loading}
            variant={props.variant}
            compact={props.compact}
            disabled={props.disabled}
            className={props.className}
        >
            {(props.loading && (
                <Box alignItems="center" minHeight={props.icon ? '28px' : '21px'} minWidth="21px">
                    <Spinner color={'currentColor'} />
                </Box>
            )) || (
                <ButtonContents title={props.title} icon={props.icon} iconAlign={props.iconAlign}>
                    {props.children}
                </ButtonContents>
            )}
        </StyledButton>
    );
};

export default Button;
export { PropsType };
