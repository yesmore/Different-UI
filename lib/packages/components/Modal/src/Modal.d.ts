export declare const modalProps: {
    readonly show: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly mask: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly modalStyle: {
        readonly type: ObjectConstructor;
        readonly default: () => {
            width: string;
        };
    };
    readonly headerStyle: {
        readonly type: ObjectConstructor;
        readonly default: () => {
            color: string;
        };
    };
    readonly contentStyle: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
    };
    readonly footerStyle: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
    };
    readonly headColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly headText: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly headTextColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly contentText: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly contentTextColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly position: {
        readonly type: StringConstructor;
        readonly default: "top";
    };
    readonly actionBtn: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showHead: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly confirmText: {
        readonly type: StringConstructor;
        readonly default: "确定";
    };
    readonly cancelText: {
        readonly type: StringConstructor;
        readonly default: "取消";
    };
    readonly animate: {
        readonly type: StringConstructor;
        readonly default: "fade";
    };
};
