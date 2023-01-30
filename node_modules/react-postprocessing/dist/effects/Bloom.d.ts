/// <reference types="react" />
import { BlendFunction } from 'postprocessing';
export declare const Bloom: import("react").ForwardRefExoticComponent<{
    blendFunction?: BlendFunction;
    luminanceThreshold?: number;
    luminanceSmoothing?: number;
    intensity?: number;
    width?: number;
    height?: number;
    kernelSize?: any;
} & Partial<{
    blendFunction: BlendFunction;
    opacity: number;
}>>;
