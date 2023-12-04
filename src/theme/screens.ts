interface ScreenSizes {
  sm: 480;
  md: 768;
  lg: 992;
  xl: 1200;
}

type ScreenBreakpoints = {
  [K in keyof ScreenSizes]: `${ScreenSizes[K]}px`;
};

export const SCREEN_SIZES: ScreenSizes = {
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const SCREEN_BREAKPOINTS: ScreenBreakpoints = Object.entries(
  SCREEN_SIZES
).reduce((acc, [key, value]) => {
  (acc as Record<string, string>)[key] = `${value}px`;
  return acc;
}, {} as ScreenBreakpoints);
