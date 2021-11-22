declare const _default: import("vue").DefineComponent<{
    rate: {
        type: NumberConstructor;
        default: number;
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
    totalStars: {
        type: NumberConstructor;
        default: number;
    };
}, {
    starNum: CallableFunction | import("vue").Ref<number>;
    setStarNum: CallableFunction | import("vue").Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    rate?: unknown;
    size?: unknown;
    totalStars?: unknown;
} & {
    rate: number;
    size: number;
    totalStars: number;
} & {}>, {
    rate: number;
    size: number;
    totalStars: number;
}>;
export default _default;
