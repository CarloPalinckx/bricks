import { storiesOf } from '@storybook/react';
import React from 'react';
import Badge from '../../components/Badge';

storiesOf('Badge', module)
    .add('Single digit', () => <Badge>1</Badge>)
    .add('Multiple digits', () => <Badge>1912</Badge>);
