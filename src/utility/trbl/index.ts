type TrblType = {
    top: string;
    right: string;
    bottom: string;
    left: string;
};

type PxCoordinateType = number | 'auto';

const SPACING = 2;

const coordinatesFromShorthand = <GenericCoordinate>(
    ...coordinates: Array<GenericCoordinate>
): [GenericCoordinate, GenericCoordinate, GenericCoordinate, GenericCoordinate] => {
    switch (coordinates.length) {
        case 1:
            return [coordinates[0], coordinates[0], coordinates[0], coordinates[0]];
        case 2:
            return [coordinates[0], coordinates[1], coordinates[0], coordinates[1]];
        case 3:
            return [coordinates[0], coordinates[1], coordinates[2], coordinates[1]];
        case 4:
            return [coordinates[0], coordinates[1], coordinates[2], coordinates[3]];
        default:
            throw new Error('Incorrect amount of coordinates provided.');
    }
};

const trbl = (...coordinates: Array<PxCoordinateType>): TrblType => {
    const px = coordinatesFromShorthand(...coordinates).map(
        (coordinate): string => (coordinate === 'auto' ? 'auto' : `${coordinate * SPACING}px`),
    );

    return { top: px[0], right: px[1], bottom: px[2], left: px[3] };
};

export default trbl;
export { TrblType, PxCoordinateType };
