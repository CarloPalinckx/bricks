import { ButtonThemeType } from '../components/Button';
import { ContrastThemeType } from '../components/Contrast/Contrast.style';
import { HeadingThemeType } from '../components/Heading';
import { MessageStreamThemeType } from '../components/MessageStream';
import { NotificationThemeType } from '../components/Notification';
import { PopoverThemeType } from '../components/Popover';
import { PriceTagThemeType } from '../components/PriceTag';
import { ScrollBoxThemeType } from '../components/ScrollBox';
import { SubHeadingThemeType } from '../components/SubHeading';
import { TextThemeType } from '../components/Text';

type ThemeType = {
    Button:ButtonThemeType;
    Contrast:ContrastThemeType;
    Heading:HeadingThemeType;
    MessageStream:MessageStreamThemeType;
    Notification:NotificationThemeType;
    Popover:PopoverThemeType;
    PriceTag:PriceTagThemeType;
    ScrollBox:ScrollBoxThemeType;
    SubHeading:SubHeadingThemeType;
    Text:TextThemeType;
};

export default ThemeType;
