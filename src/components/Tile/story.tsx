import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../Box';
import Tile from '.';
import Heading from '../Heading';
import trbl from '../../utility/trbl';

storiesOf('Tile', module).add('Default', () => {
    return (
        <Box width="100%">
            <Tile>
                <Box padding={trbl(36)}>
                    <Heading hierarchy={2}>Tile</Heading>
                </Box>
            </Tile>
        </Box>
    );
});
