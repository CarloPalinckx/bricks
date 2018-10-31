import React, { ComponentClass } from 'react';
import { PropsType as TextFieldPropsType } from '../../';
declare type OmittedKeys = 'onChange' | 'value';
declare type PropsType = Pick<TextFieldPropsType, Exclude<keyof TextFieldPropsType, OmittedKeys>> & {
    value: number;
    locale: string;
    currency: string;
    onChange(value: number): void;
};
declare type WithCurrencyFormattingType = ComponentClass<PropsType>;
declare const withCurrencyFormatting: (Wrapped: React.ComponentType<TextFieldPropsType>) => React.ComponentClass<PropsType>;
export default withCurrencyFormatting;
export { WithCurrencyFormattingType };
