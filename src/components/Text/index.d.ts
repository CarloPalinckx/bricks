import { SFC } from 'react';
import { StyledType } from '../../utility/styled';
import SeverityType from '../../types/SeverityType';
declare type PropsType = StyledType & {
    compact?: boolean;
    descriptive?: boolean;
    strong?: boolean;
    inline?: boolean;
    variant?: 'small' | 'base' | 'large';
    textAlign?: 'left' | 'right' | 'center' | 'justify';
    severity?: SeverityType;
};
declare const Text: SFC<PropsType>;
export default Text;
export { PropsType };
