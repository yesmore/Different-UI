import type { ExtractPropTypes } from 'vue';
export declare const colProps: {
    readonly tag: {
        readonly type: StringConstructor;
        readonly default: "div";
    };
    readonly span: {
        readonly type: NumberConstructor;
        readonly default: 24;
    };
    readonly offset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly pull: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly push: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly xs: {
        readonly type: NumberConstructor;
        readonly default: {};
    };
    readonly sm: {
        readonly type: NumberConstructor;
        readonly default: {};
    };
    readonly md: {
        readonly type: NumberConstructor;
        readonly default: {};
    };
    readonly lg: {
        readonly type: NumberConstructor;
        readonly default: {};
    };
    readonly xl: {
        readonly type: NumberConstructor;
        readonly default: {};
    };
};
export declare type ColProps = ExtractPropTypes<typeof colProps>;
declare const _default: import("vue").DefineComponent<{
    readonly tag: {
        readonly type: StringConstructor;
        readonly default: "div";
    };
    readonly span: {
        readonly type: NumberConstructor;
        readonly default: 24;
    };
    readonly offset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly pull: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly push: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly xs: {
        readonly type: NumberConstructor;
        readonly default: {};
    };
    readonly sm: {
        readonly type: NumberConstructor;
        readonly default: {};
    };
    readonly md: {
        readonly type: NumberConstructor;
        readonly default: {};
    };
    readonly lg: {
        readonly type: NumberConstructor;
        readonly default: {};
    };
    readonly xl: {
        readonly type: NumberConstructor;
        readonly default: {};
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly tag?: unknown;
    readonly span?: unknown;
    readonly offset?: unknown;
    readonly pull?: unknown;
    readonly push?: unknown;
    readonly xs?: unknown;
    readonly sm?: unknown;
    readonly md?: unknown;
    readonly lg?: unknown;
    readonly xl?: unknown;
} & {
    tag: string;
    span: number;
    offset: number;
    pull: number;
    push: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
} & {}>, {
    tag: string;
    span: number;
    offset: number;
    pull: number;
    push: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
}>;
export default _default;
