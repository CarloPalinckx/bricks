import React, { Component, Consumer } from 'react';
declare type PayloadType = any;
declare type PropsType = {
    onUpdate?(items: StateType['items']): void;
};
declare type StateType = {
    items: Array<{
        id: string;
        payload: PayloadType;
    }>;
};
declare type ContextValue = {
    items: StateType['items'];
    update: SubscriptionProvider['update'];
    updateAll: SubscriptionProvider['updateAll'];
    remove: SubscriptionProvider['remove'];
    getPayload: SubscriptionProvider['getPayload'];
};
declare const Consumer: React.ComponentType<React.ConsumerProps<{} | undefined>>;
declare const SubscriptionConsumer: Consumer<ContextValue>;
declare class SubscriptionProvider extends Component<PropsType, StateType> {
    constructor(props: PropsType);
    private updateAll;
    private getPayload;
    private update;
    private remove;
    componentDidUpdate(prevProps: PropsType, prevState: StateType): void;
    render(): JSX.Element;
}
export { SubscriptionConsumer, SubscriptionProvider, PropsType, StateType, ContextValue, PayloadType, Consumer };
