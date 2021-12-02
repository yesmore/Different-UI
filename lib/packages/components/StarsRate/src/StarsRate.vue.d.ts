declare const _default: import("vue").DefineComponent<{
    rate: {
        type: NumberConstructor;
        default: number;
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
    totalRate: {
        type: NumberConstructor;
        default: number;
    };
    icon: {
        type: StringConstructor;
    };
    activeColor: {
        type: StringConstructor;
    };
}, {
    starNum: CallableFunction | import("vue").Ref<number>;
    setStarNum: CallableFunction | import("vue").Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    rate?: unknown;
    size?: unknown;
    totalRate?: unknown;
    icon?: unknown;
    activeColor?: unknown;
} & {
    rate: number;
    size: number;
    totalRate: number;
} & {
    icon?: string | undefined;
    activeColor?: string | undefined;
}>, {
    rate: number;
    size: number;
    totalRate: number;
}>;
export default _default;
