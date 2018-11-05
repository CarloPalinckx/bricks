import { boolean } from '@storybook/addon-knobs/react';
import Branch from '.';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Text from '../Text';

storiesOf('Utilities/Branch', module).add('Default', () => {
    return (
        <Branch
            condition={boolean('condition', true)}
            ifTrue={(children): JSX.Element => <Text>This is shown when condition is true. {children}</Text>}
            ifFalse={(children): JSX.Element => <Text>And this will be shown when condition is false. {children}</Text>}
        >
            This line is shared whether the condition is true or not.
        </Branch>
    );
});
