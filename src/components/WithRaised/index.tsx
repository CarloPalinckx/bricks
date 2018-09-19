import React, { ComponentType, Component } from 'react';
import StyledWithRaised from './style';

type WithLoadingProps = {
    level: 0 | 1 | 2;
};

// tslint:disable
const withRaised = <P extends object>(Wrapped: ComponentType<P>) =>
    class WithLoading extends Component<P & WithLoadingProps> {
        public render(): JSX.Element {
            const { level, ...props } = this.props as WithLoadingProps;

            return (
                <StyledWithRaised level={level}>
                    <Wrapped {...props} />
                </StyledWithRaised>
            );
        }
    };

export default withRaised;
