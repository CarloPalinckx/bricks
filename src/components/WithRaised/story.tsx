import React from 'react';
import { select } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import Box from '../Box';
import Heading from '../Heading';
import withRaised from '.';
import { RaisedPropsType } from './style';
import trbl from '../../utility/trbl';

storiesOf('WithRaised', module).add('Default', () => {
    const level = select('Level', [0, 1, 2], 1) as RaisedPropsType['level'];
    const RaisedBox = withRaised(Box);

    return (
        <RaisedBox width="100%" level={level} padding={trbl(36)}>
            <Heading>Level {level}</Heading>
        </RaisedBox>
    );
});
