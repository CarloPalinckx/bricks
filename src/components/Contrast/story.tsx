import { storiesOf } from '@storybook/react';
import React from 'react';
import Contrast from '.';
import trbl from '../../utility/trbl';
import Button from '../Button';
import Box from '../Box';

storiesOf('Contrast', module).add('Default', () => (
    <>
        <Contrast>
            <Box padding={trbl(6)}>
                <Button variant="secondary" title="Inside Contrast" />
            </Box>
        </Contrast>
        <Box padding={trbl(6)}>
            <Button variant="secondary" title="Outside of Contrast" />
        </Box>
    </>
));
