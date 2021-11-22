declare const _default: import("vue").DefineComponent<{
    autoplay: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    initialIndex: {
        type: NumberConstructor;
        default: number;
    };
    showDot: {
        type: BooleanConstructor;
        default: boolean;
    };
    showDirector: {
        type: BooleanConstructor;
        default: boolean;
    };
    animation: {
        type: StringConstructor;
        default: string;
    };
    dotBgColor: {
        type: StringConstructor;
    };
}, {
    dotClick: (index: number) => void;
    mouseEnter: () => void;
    mouseLeave: () => void;
    dirClick: (dir: string) => void;
    currentIndex: import("vue").Ref<number>;
    itemLen: import("vue").Ref<number>;
    animation: import("vue").Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    autoplay?: unknown;
    duration?: unknown;
    initialIndex?: unknown;
    showDot?: unknown;
    showDirector?: unknown;
    animation?: unknown;
    dotBgColor?: unknown;
} & {
    autoplay: boolean;
    duration: number;
    initialIndex: number;
    showDot: boolean;
    showDirector: boolean;
    animation: string;
} & {
    dotBgColor?: string | undefined;
}>, {
    autoplay: boolean;
    duration: number;
    initialIndex: number;
    showDot: boolean;
    showDirector: boolean;
    animation: string;
}>;
export default _default;
