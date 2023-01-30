/// <reference types="react" />
export declare const ToneMapping: import("react").ForwardRefExoticComponent<{
    blendFunction?: import("postprocessing").BlendFunction;
    adaptive?: boolean;
    resolution?: number;
    middleGrey?: number;
    maxLuminance?: number;
    averageLuminance?: number;
    adaptationRate?: number;
} & Partial<{
    blendFunction: import("postprocessing").BlendFunction;
    opacity: number;
}>>;
