import { storiesOf } from '@storybook/react';
import React, { FunctionComponent } from 'react';
import Skeleton from '.';
import { boolean, number, text } from '@storybook/addon-knobs';
import Text from '../Text';
import Button from '../Button';
import EmptyState from '../EmptyState';
type DemoPropsType = {
    loading?: boolean;
    element: string;
};

const Demo: FunctionComponent<DemoPropsType> = ({ element, loading }): JSX.Element => {
    if (element === 'Text') {
        if (loading) {
            return <Skeleton.Text lines={number('lines', 3)} baseWidth={number('baseWidth', 80)} />;
        }

        return (
            <>
                <Text>Leverage agile frameworks to provide a robust synopsis for high level overviews.</Text>
                <Text>Iterative approaches to corporate strategy foster collaborative</Text>
                <Text>thinking to further the overall value proposition.</Text>
            </>
        );
    } else if (element === 'Button') {
        if (loading) {
            return <Skeleton.Button width={number('width', 139)} />;
        }

        return <Button title="The button has loaded" variant="primary" />;
    } else {
        if (loading) {
            return <Skeleton.Rect width={text('width', '800px')} height={text('height', '600px')} />;
        }

        return <EmptyState title="Loaded!" message="If you are reading this, you wasting your time." />;
    }
};

storiesOf('Skeleton', module).add('Text', () => <Demo element="Text" loading={boolean('loading', true)} />);
storiesOf('Skeleton', module).add('Rect', () => <Demo element="Rect" loading={boolean('loading', true)} />);
storiesOf('Skeleton', module).add('Button ⚠️', () => <Demo element="Button" loading={boolean('loading', true)} />);
