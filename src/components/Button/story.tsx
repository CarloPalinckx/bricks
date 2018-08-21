import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import styles from '@sambego/storybook-styles';
import React from 'react';
import { PropsType } from '.';
import trbl from '../../utility/trbl';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Contrast from '../Contrast';
import Icon from '../Icon';
import Box from '../Box';
import { MediumIcons } from '../Icon/types';

/* tslint:disable */
const mediumIconKeys = Object.keys(MediumIcons).filter(key => MediumIcons[key as any].match('<svg'));
/* tslint:enable */

(storiesOf('Button', module) as any)
    .addDecorator(styles({
        padding: '40px',
        backgroundColor: '#fff',
        backgroundImage: `linear-gradient(45deg, rgba(0,0,0,.05) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.05)75%, rgba(0,0,0,.05)),
                            linear-gradient(45deg, rgba(0,0,0,.05) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05))`,
        backgroundSize: '30px 30px',
        backgroundPosition: '0 0, 15px 15px',
    }))
    .addParameters({
        info: {
            inline: true,
            source: false,
            propTables: false,
            styles: {
                header: {
                    body: {
                        marginBottom: '-15px',
                    },
                },
                infoBody: {
                    border: 'none',
                },
            }
        },
    })
    .add('With text', () => {
        return (
            <Button
                variant={
                    select(
                        'variant',
                        ['primary', 'secondary', 'warning', 'destructive', 'plain'],
                        'primary',
                    ) as PropsType['variant']
                }
                title={text('title', 'Click me')}
                disabled={boolean('disabled', false)}
                flat={boolean('flat', false)}
                compact={boolean('compact', false)}
            />
        );
    }, {
        info: {
            text: `## Markdown text
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`
        }
    })
    .add('With an icon', () => {
        return (
            <Button
                title={text('title', 'Delete')}
                variant={
                    select(
                        'variant',
                        ['primary', 'secondary', 'warning', 'destructive', 'plain'],
                        'destructive',
                    ) as PropsType['variant']
                }
                icon={select('Icon', mediumIconKeys, 'trash') as PropsType['icon']}
                iconAlign={select('Align icon', ['left', 'right'], 'left') as PropsType['iconAlign']}
                disabled={boolean('disabled', false)}
                flat={boolean('flat', false)}
                compact={boolean('compact', false)}
            />
        );
    })
    .add('On a contrast area', () => {
        return (
            <Contrast>
                <Box padding={trbl(12)}>
                    <ButtonGroup>
                        <Button
                            variant="secondary"
                            title={text('title', 'Click me')}
                            disabled={boolean('disabled', false)}
                            action={(): void => {
                                /* */
                            }}
                        />
                        <Button
                            variant="plain"
                            title={'Click me'}
                            action={(): void => {
                                /* */
                            }}
                            compact
                        >
                            <Icon size="medium" icon="gear" />
                        </Button>
                    </ButtonGroup>
                </Box>
            </Contrast>
        );
    });
