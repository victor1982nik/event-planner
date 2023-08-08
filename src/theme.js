export const theme = {
  colors: {
    //typography
    logo: "#7B61FF",
    mainTitle: "#3F3F3F",
    title: "#1C1B1F",
    text: "#49454F",

    bar: "#3F3F3F",
    menu: "#ACA7C3",

    whiteText: "#FFFFFF",
    purpleText: "#7B61FF",

    categoryHight: "#FF2B77",
    categoryMedium: "#E2A300",
    categoryLow: "#6BD475",

    //input
    inputTitle: "#3F3F3F",
    //inputTitleActive: '#7B61FF',
    inputPlaceholderSearch: "#888888", //
    inputPlaceholder: "#ACA7C3",
    inputText: "#3F3F3F",
    disabledInput: "#ACA7C3", //

    accentText: "#7B61FF",

    //border
    borderMenu: "#ACA7C3",
    borderInput: "#ACA7C3",
    borderInputAccent: "#7B61FF",
    borderInputFail: "#FF2B77",

    iconSearch: "#7B61FF",
    iconInput: "#7B61FF",
    iconInputFail: "#FF2B77",

    backgroundWhite: "#FFFFFF",

    button: "#7B61FF",
    buttonAccent: "#6243FF",
  },
  space: [0, 2, 4, 8, 16, 32, 64],
  fonts: {},
  fontSizes: {
    xs: "12px",
    s: "14px",
    m: "16px",
    ml: "24px",
    mll: "28px",
    n: "18px",
    nl: "20px",
    l: "32px",
    lx: "36px",
    xl: "64px",
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
  },
  borders: {
    none: "none",
    normal: "1px solid",
    medium: "2px solid",
  },
  radii: {
    round: "50%",
    tiny: "4px",
    small: "8px",
    medium: "10px",
    large: "12px",
    none: "0",
  },
  breakpoints: {
    mobile: {
      media: "(max-width: 767px)",
      width: "320px",
    },
    tablet: {
      media: "(min-width: 768px) and (max-width: 1279px)",
      mediaFrom: "(min-width: 768px)",
      width: "768px",
    },
    desktop: {
      media: "(min-width: 1280px)",
      width: "1280px",
    },
  },
};
