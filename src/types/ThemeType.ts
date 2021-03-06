import { BadgeThemeType } from '../components/Badge';
import { ButtonThemeType } from '../components/Button/style';
import { CheckboxThemeType } from '../components/Checkbox/style';
import { ContrastThemeType } from '../components/Contrast/style';
import { HeadingThemeType } from '../components/Heading';
import { IllustrationThemeType } from '../components/Illustration/style';
import { LinkThemeType } from '../components/Link/style';
import { MessageStreamThemeType } from '../components/MessageStream/style';
import { ModalThemeType } from '../components/Modal/style';
import { MultiButtonThemeType } from '../components/MultiButton/style';
import { NotificationThemeType } from '../components/Notification/style';
import { PopoverThemeType } from '../components/Popover/style';
import { PriceTagThemeType } from '../components/PriceTag/style';
import { RadioButtonThemeType } from '../components/RadioButton/style';
import { RaisedThemeType } from '../components/Raised/style';
import { RangeThemeType } from '../components/Range/style';
import { ScrollBoxThemeType } from '../components/ScrollBox/style';
import { TableThemeType } from '../components/Table/style';
import { TextThemeType } from '../components/Text/style';
import { TextAreaThemeType } from '../components/TextArea/style';
import { TextFieldThemeType } from '../components/TextField/style';
import { TileThemeType } from '../components/Tile';
import { ToasterThemeType } from '../components/Toaster/style';
import { ToggleThemeType } from '../components/Toggle/style';
import { SelectThemeType } from '../components/Select/style';
import { SkeletonThemeType } from '../components/Skeleton/style';

type ThemeType = {
    Badge: BadgeThemeType;
    Button: ButtonThemeType;
    Checkbox: CheckboxThemeType;
    Contrast: ContrastThemeType;
    Heading: HeadingThemeType;
    MessageStream: MessageStreamThemeType;
    Modal: ModalThemeType;
    MultiButton: MultiButtonThemeType;
    Notification: NotificationThemeType;
    Illustration: IllustrationThemeType;
    Link: LinkThemeType;
    Popover: PopoverThemeType;
    PriceTag: PriceTagThemeType;
    Raised: RaisedThemeType;
    Range: RangeThemeType;
    ScrollBox: ScrollBoxThemeType;
    Select: SelectThemeType;
    Skeleton: SkeletonThemeType;
    Table: TableThemeType;
    Text: TextThemeType;
    TextArea: TextAreaThemeType;
    TextField: TextFieldThemeType;
    Tile: TileThemeType;
    Toaster: ToasterThemeType;
    RadioButton: RadioButtonThemeType;
    Toggle: ToggleThemeType;
};

export default ThemeType;
