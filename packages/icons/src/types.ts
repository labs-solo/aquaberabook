import type { IconName as BasicIconName } from '@fortawesome/fontawesome-svg-core';

export enum IconStyle {
    // Regular
    Regular = 'regular',
    SharpRegular = 'sharp-regular',
    // Solid
    Solid = 'solid',
    SharpSolid = 'sharp-solid',
    // Duotone
    Duotone = 'duotone',
    SharpDuotoneSolid = 'sharp-duotone-solid',
    // Light
    Light = 'light',
    SharpLight = 'sharp-light',
    // Thin
    Thin = 'thin',
    SharpThin = 'sharp-thin',
}

type CustomIconName = 'gitbook' | 'icon1' | 'icon2' | 'icon3' | 'icon4';

export type IconName = BasicIconName | CustomIconName;
