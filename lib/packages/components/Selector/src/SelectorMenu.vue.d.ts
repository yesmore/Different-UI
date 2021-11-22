declare const _default: import("vue").DefineComponent<{
    searchValue: {
        type: StringConstructor;
        default: () => void;
    };
    data: {
        type: ArrayConstructor;
        default: () => {
            id: number;
            value: string;
            text: string;
        }[];
    };
}, {
    setItemValue: (item: Record<string, unknown>) => void;
    searchData: import("vue").Ref<any[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    searchValue?: unknown;
    data?: unknown;
} & {
    searchValue: string;
    data: unknown[];
} & {}>, {
    searchValue: string;
    data: unknown[];
}>;
export default _default;
