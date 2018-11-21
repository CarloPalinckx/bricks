type DefaultTypes = {
    backgroundColor: string;
    color: string;
    boxShadow: string;
};

type ComponentStateTypes = {
    idle: DefaultTypes;
    hover: DefaultTypes;
    focus: DefaultTypes;
    active: DefaultTypes;
};

type ButtonThemeType = {
    common: {
        borderRadius: string;
        borderWidth: string;
        fontWeight: string;
        fontFamily: string;
        fontSize: string;
        textDecoration: string;
    };
    Default: {
        primary: ComponentStateTypes;
        secondary: ComponentStateTypes;
        warning: ComponentStateTypes;
        destructive: ComponentStateTypes;
        plain: {
            hover: DefaultTypes;
            focus: DefaultTypes;
            active: DefaultTypes;
            idle: {
                backgroundColor: string;
                color: string;
                boxShadow: string;
                textDecoration: string;
            };
        };
        disabled: {
            backgroundColor: string;
            color: string;
            stripingColor: string;
        };
    };

    Cta: {
        borderRadius: string;
        boxShadow: string;

        color: string;
        backgroundColor: string;
        hover: {
            backgroundColor: string;
            boxShadow: string;
        };
        focus: {
            backgroundColor: string;
            boxShadow: string;
        };
        active: {
            boxShadow: string;
            backgroundColor: string;
        };
    };
    Flat: {
        primary: {
            color: string;
            backgroundColor: string;
        };
        destructive: {
            color: string;
        };
    };
};

export { ButtonThemeType };
