import { TextureEffect } from 'postprocessing';
import { ForwardRefExoticComponent } from 'react';
declare type TextureProps = ConstructorParameters<typeof TextureEffect>[0] & {
    textureSrc: string;
};
export declare const Texture: ForwardRefExoticComponent<TextureProps>;
export {};
