import ResizeObserver from 'resize-observer-polyfill';
import type { CustomizedHTMLElement } from './types';
export declare type ResizableElement = CustomizedHTMLElement<{
    __resizeListeners__?: Array<(...args: unknown[]) => unknown>;
    __ro__?: ResizeObserver;
}>;
export declare const addResizeListener: (element: any, fn: (...args: unknown[]) => unknown) => void;
export declare const removeResizeListener: (element: any, fn: (...args: unknown[]) => unknown) => void;
