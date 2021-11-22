declare const _default: import("vue").DefineComponent<{
    data: ArrayConstructor;
    placeholder: StringConstructor;
}, {
    inputValue: import("vue").Ref<string>;
    searchValue: import("vue").Ref<string>;
    setItemValue: (item: {
        text: string;
        value: any;
    }) => void;
    searchOptions: (value: string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data?: unknown;
    placeholder?: unknown;
} & {} & {
    data?: unknown[] | undefined;
    placeholder?: string | undefined;
}>, {}>;
export default _default;
