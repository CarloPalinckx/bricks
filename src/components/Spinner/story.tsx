import { color, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Box from '../Box';
import React from 'react';
import Spinner from '.';

storiesOf('Spinner', module).add('Default', () => {
    const size = text('size', '100px');

    return (
        <Box width={size} height={size}>
            <Spinner color={color('fill', '#5bd16a')} />
        </Box>
    );
});
