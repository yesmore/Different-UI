declare const _default: import("vue").DefineComponent<{
    mask: {
        type: BooleanConstructor;
        default: boolean;
    };
    showModal: {
        type: BooleanConstructor;
        default: boolean;
    };
    modalStyle: {
        type: ObjectConstructor;
        default: () => {
            width: string;
        };
    };
    headerStyle: {
        type: ObjectConstructor;
        default: () => {
            color: string;
        };
    };
    contentStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    footerStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    headColor: {
        type: StringConstructor;
        default: string;
    };
    headText: {
        type: StringConstructor;
        default: string;
    };
    headTextColor: {
        type: StringConstructor;
        default: string;
    };
    contentText: {
        type: StringConstructor;
        default: string;
    };
    contentTextColor: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: StringConstructor;
        default: string;
    };
    actionBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    showHead: {
        type: BooleanConstructor;
        default: boolean;
    };
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    animate: {
        type: StringConstructor;
        default: string;
    };
}, {
    dfModalHeight: import("vue").Ref<number>;
    mask: import("vue").Ref<boolean>;
    showModal: import("vue").Ref<boolean>;
    confirm: () => void;
    cancel: () => void;
    dfModal: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    mask?: unknown;
    showModal?: unknown;
    modalStyle?: unknown;
    headerStyle?: unknown;
    contentStyle?: unknown;
    footerStyle?: unknown;
    headColor?: unknown;
    headText?: unknown;
    headTextColor?: unknown;
    contentText?: unknown;
    contentTextColor?: unknown;
    position?: unknown;
    actionBtn?: unknown;
    showHead?: unknown;
    confirmText?: unknown;
    cancelText?: unknown;
    animate?: unknown;
} & {
    mask: boolean;
    showModal: boolean;
    modalStyle: Record<string, any>;
    headerStyle: Record<string, any>;
    contentStyle: Record<string, any>;
    footerStyle: Record<string, any>;
    headColor: string;
    headText: string;
    headTextColor: string;
    contentText: string;
    contentTextColor: string;
    position: string;
    actionBtn: boolean;
    showHead: boolean;
    confirmText: string;
    cancelText: string;
    animate: string;
} & {}>, {
    mask: boolean;
    showModal: boolean;
    modalStyle: Record<string, any>;
    headerStyle: Record<string, any>;
    contentStyle: Record<string, any>;
    footerStyle: Record<string, any>;
    headColor: string;
    headText: string;
    headTextColor: string;
    contentText: string;
    contentTextColor: string;
    position: string;
    actionBtn: boolean;
    showHead: boolean;
    confirmText: string;
    cancelText: string;
    animate: string;
}>;
export default _default;
