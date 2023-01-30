import { GlitchEffect, GlitchMode } from 'postprocessing';
import { ForwardRefExoticComponent } from 'react';
import { ReactThreeFiber } from 'react-three-fiber';
export declare type GlitchProps = ConstructorParameters<typeof GlitchEffect>[0] & Partial<{
    mode: typeof GlitchMode;
    active: boolean;
    delay: ReactThreeFiber.Vector2;
    duration: ReactThreeFiber.Vector2;
    chromaticAberrationOffset: ReactThreeFiber.Vector2;
    strength: ReactThreeFiber.Vector2;
}>;
export declare const Glitch: ForwardRefExoticComponent<GlitchEffect>;
