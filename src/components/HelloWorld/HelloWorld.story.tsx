import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('HelloWorld', module)
    .add('with text', () => <div>Hello World!</div>)
    .add('with emoji', () => <div>👋 🌍!</div>);
