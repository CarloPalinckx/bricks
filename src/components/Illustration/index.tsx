/// <reference path="../../index.d.ts" />
import React, { StatelessComponent } from 'react';
import { StyledType } from '../../utility/styled';
import { StyledIllustration } from './style';
import { Illustrations } from './types';

type IllustrationPropsType = StyledType & {
    illustration: keyof typeof Illustrations;
};

const IllustrationElement: StatelessComponent<IllustrationPropsType> = ({ illustration }): JSX.Element => {
    return (
        <StyledIllustration
            aria-hidden
            role="img"
            src={`${__ENVIRONMENT__.ASSET_LOCATION}/illustrations/${illustration}.svg`}
        />
    );
};

export default IllustrationElement;
export { IllustrationPropsType, Illustrations };
