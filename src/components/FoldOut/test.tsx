import React from 'react';
import renderer from 'react-test-renderer';
import ResizeObserver from 'resize-observer-polyfill';
import FoldOut from '../FoldOut';

/* tslint:disable */
(console.warn as any).mockImplementation(() => {});
/* tslint:enable */

const renderOptions = {
    createNodeMock: (): Object => ({
        contentRect: {
            height: 900,
        },
    }),
};

describe('FoldOut', () => {
    it('should have a height when open', () => {
        const foldOut = renderer.create(<FoldOut isOpen />, renderOptions).toJSON();

        expect(foldOut).toMatchSnapshot();
    });

    it('should have no height when closed', () => {
        const foldOut = renderer.create(<FoldOut isOpen={false} />, renderOptions).toJSON();

        expect(foldOut).toMatchSnapshot();
    });

    it('should use the fallback and warn once ResizeObserver is not available or throws', () => {
        (ResizeObserver as jest.Mock<ResizeObserver>).mockImplementationOnce(() => {
            throw TypeError;
        });

        const foldOut = renderer.create(<FoldOut isOpen />, renderOptions).toJSON();

        expect(foldOut).toMatchSnapshot();
        /* tslint:disable */
        expect(console.warn).toHaveBeenCalled();
        /* tslint:enable */
    });
});
