import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import PriceTag from '../../components/PriceTag';
import MosTheme from '../../themes/MosTheme';

describe('PriceTag', () => {
    it('should render with a hidden currency', () => {
        const component = mount(
            <MosTheme>
                <PriceTag
                    parts={[
                        { type: 'currency', value: '€' },
                        { type: 'literal', value: ' ' },
                        { type: 'integer', value: '10' },
                        { type: 'decimal', value: ',' },
                        { type: 'fraction', value: '20' },
                    ]}
                    hideCurrency
                />
            </MosTheme>,
        ).find(PriceTag);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render a base price', () => {
        const component = mount(
            <MosTheme>
                <PriceTag
                    parts={[
                        { type: 'currency', value: '€' },
                        { type: 'literal', value: ' ' },
                        { type: 'integer', value: '10' },
                        { type: 'decimal', value: ',' },
                        { type: 'fraction', value: '20' },
                    ]}
                    displayType="base"
                />
            </MosTheme>,
        ).find(PriceTag);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render an action price', () => {
        const component = mount(
            <MosTheme>
                <PriceTag
                    parts={[
                        { type: 'currency', value: '€' },
                        { type: 'literal', value: ' ' },
                        { type: 'integer', value: '10' },
                        { type: 'decimal', value: ',' },
                        { type: 'fraction', value: '20' },
                    ]}
                    displayType="action"
                />
            </MosTheme>,
        ).find(PriceTag);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render with a hidden currency and superscript franction', () => {
        const component = mount(
            <MosTheme>
                <PriceTag
                    parts={[
                        { type: 'currency', value: '€' },
                        { type: 'literal', value: ' ' },
                        { type: 'integer', value: '10' },
                        { type: 'decimal', value: ',' },
                        { type: 'fraction', value: '20' },
                    ]}
                    superScriptFraction
                    hideCurrency
                />
            </MosTheme>,
        ).find(PriceTag);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render with a dashed fraction', () => {
        const component = mount(
            <MosTheme>
                <PriceTag
                    parts={[
                        { type: 'currency', value: '€' },
                        { type: 'literal', value: ' ' },
                        { type: 'integer', value: '10' },
                        { type: 'decimal', value: ',' },
                        { type: 'fraction', value: '00' },
                    ]}
                    showDash
                />
            </MosTheme>,
        ).find(PriceTag);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render with a hidden fraction on a round value', () => {
        const component = mount(
            <MosTheme>
                <PriceTag
                    parts={[
                        { type: 'currency', value: '€' },
                        { type: 'literal', value: ' ' },
                        { type: 'integer', value: '10' },
                        { type: 'decimal', value: ',' },
                        { type: 'fraction', value: '00' },
                    ]}
                    hideZeros
                />
            </MosTheme>,
        ).find(PriceTag);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render with a fraction in superscript', () => {
        const component = mount(
            <MosTheme>
                <PriceTag
                    parts={[
                        { type: 'currency', value: '€' },
                        { type: 'literal', value: ' ' },
                        { type: 'integer', value: '10' },
                        { type: 'decimal', value: ',' },
                        { type: 'fraction', value: '20' },
                    ]}
                    superScriptFraction
                />
            </MosTheme>,
        ).find(PriceTag);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render with showDash and superscript on a round value', () => {
        const component = mount(
            <MosTheme>
                <PriceTag
                    parts={[
                        { type: 'currency', value: '€' },
                        { type: 'literal', value: ' ' },
                        { type: 'integer', value: '10' },
                        { type: 'decimal', value: ',' },
                        { type: 'fraction', value: '00' },
                    ]}
                    showDash
                    superScriptFraction
                />
            </MosTheme>,
        ).find(PriceTag);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render a label with the price is 0', () => {
        const component = mount(
            <MosTheme>
                <PriceTag
                    parts={[
                        { type: 'currency', value: '€' },
                        { type: 'literal', value: ' ' },
                        { type: 'integer', value: '0' },
                        { type: 'decimal', value: ',' },
                        { type: 'fraction', value: '00' },
                    ]}
                    freeLabel="free"
                />
            </MosTheme>,
        ).find(PriceTag);

        expect(toJson(component)).toMatchSnapshot();
    });
});
