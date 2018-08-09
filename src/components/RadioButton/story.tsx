import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import RadioButton from '../RadioButton';

storiesOf('RadioButton', module).add('Default', () => {
    return (
        <RadioButton
            checked={boolean('checked', true)}
            name="demo"
            label="foo"
            value="demo2"
            changeHandler={(): void => undefined}
        />
    );
});
