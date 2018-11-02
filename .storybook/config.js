import { configure, addDecorator } from '@storybook/react';
import themeDecorator from './decorators/themeDecorator';
import { withKnobs } from '@storybook/addon-knobs';
import { setOptions } from '@storybook/addon-options';
import { configureViewport } from '@storybook/addon-viewport';
import { themes } from '@storybook/components';

configureViewport();

setOptions({
    theme: {
        ...themes.dark,
        mainTextFace: 'source sans pro',
        mainTextSize: '14px',
        mainTextColor: '#A6AAB3',
        mainBorder: '1px solid #55656D',
        mainBackground: '#21252A',
        mainFill: '#34373F',
        barFill: '#21252A',
        inputFill: '#21252A',
        dimmedTextColor: '#55656D',
        highlightColor: '#fff',
        brand: {
            background: 'url("/logo.png")',
            'padding-top': 'calc(70% - 23px)',
            'background-size': '100% 100%',
            'background-position': 'top -11.5px center',
            'background-repeat': 'no-repeat',
        },
    },
    name: 'home',
    url: '#',
    addonPanelInRight: true,
});

addDecorator(themeDecorator);
addDecorator(withKnobs);

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

function loadStories() {
    requireAll(require.context('../src', true, /story\.(DontTest\.)?tsx?$/));
}

configure(loadStories, module);
