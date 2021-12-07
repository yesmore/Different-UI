declare const _default: import("vue").DefineComponent<{
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    labelText: {
        type: StringConstructor;
        default: string;
    };
    showLabel: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    switch_on: import("vue").Ref<boolean>;
    handleChange: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    activeColor?: unknown;
    labelText?: unknown;
    showLabel?: unknown;
} & {
    activeColor: string;
    labelText: string;
    showLabel: boolean;
} & {}>, {
    activeColor: string;
    labelText: string;
    showLabel: boolean;
}>;
export default _default;
