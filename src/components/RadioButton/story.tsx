import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import RadioButton from '../RadioButton';

storiesOf('Primitives/RadioButton', module).add('Default', () => {
    return (
        <RadioButton
            checked={boolean('checked', true)}
            disabled={boolean('disabled', false)}
            error={boolean('error', false)}
            name="demo"
            label="foo"
            value="demo2"
            onChange={(): void => undefined}
        />
    );
});
