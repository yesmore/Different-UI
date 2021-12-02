import type { ExtractPropTypes, Ref } from 'vue';
export declare const useTransitionProps: {
    transitionDuration: {
        type: NumberConstructor;
        default: number;
    };
    transitionShow: StringConstructor;
    transitionHide: StringConstructor;
};
export declare const useTransition: (props: ExtractPropTypes<typeof useTransitionProps>, indicator: Ref<boolean>) => {
    transition: import("vue").ComputedRef<string>;
    transitionStyle: import("vue").ComputedRef<string>;
};
