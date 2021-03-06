const defaultColors = {
  primary: "#53CE27",
  primaryHover: "#81DB61",
  primaryBackground: "#F5FFF2",
  secondary: "#37B20B",
  secondaryHover: "#8EDE71",
  white: "#ffffff",
  black: "#3A3A3A",
  gold: "#ddae71",
  goldShadow: "0 0 0 3px rgb(255 214 132 / 30%)",
  border: "#d9d9d9",
  grey: "#a5a5a5",
  greyf3f4f4: "#f3f4f4",
};

const colors = {
  primary: defaultColors.primary,
  primaryHover: defaultColors.primaryHover,
  primaryBackground: defaultColors.primaryBackground,
  black: defaultColors.black,
  white: defaultColors.white,
  gold: defaultColors.gold,
  goldShadow: defaultColors.goldShadow,
  border: defaultColors.border,
  grey: defaultColors.grey,
  greyf3f4f4: defaultColors.greyf3f4f4,
};

const fonts = {
  default: "'Raleway','Nunito Sans', sans-serif",
};

const breakpoints = {
  xs: 575, //Mobile devices
  sm: 576, //Small screen start
  md: 768, //Medium screen start
  lg: 992, //Large screen start
  xl: 1200, //Extra Large screen start
  xxl: 1600, //Double Extra Large screen start
};
const device = {
  xs: `(max-width: ${breakpoints.xs}px)`,
  sm: `(min-width: ${breakpoints.sm}px)`,
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`,
  xxl: `(min-width: ${breakpoints.xxl}px)`,

  mdMax: `(max-width: ${breakpoints.lg}px)`,
};

const space = {
  InputFieldMargin: "1.875rem" /* 30px */,
  FieldButtonHeight: "2.5rem" /* 40px */,
  BorderRadius: "0.313rem" /* 6px */,
};

const theme = {
  colors: colors,
  font: fonts,
  device: device,
  space: space,
};

export default theme;
