declare const _default: import("vue").DefineComponent<{
    itemLen: NumberConstructor;
    currentIndex: NumberConstructor;
    showDot: {
        type: BooleanConstructor;
        default: boolean;
    };
    dotBgColor: {
        type: StringConstructor;
        default: string;
    };
}, {
    dotClick: (index: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    itemLen?: unknown;
    currentIndex?: unknown;
    showDot?: unknown;
    dotBgColor?: unknown;
} & {
    showDot: boolean;
    dotBgColor: string;
} & {
    itemLen?: number | undefined;
    currentIndex?: number | undefined;
}>, {
    showDot: boolean;
    dotBgColor: string;
}>;
export default _default;
