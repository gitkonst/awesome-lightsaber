// Credit: Gonçalo Peres, dekin88 https://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device-in-jquery

const isMobile = () => window.matchMedia("only screen and (max-width: 760px)").matches;

export default isMobile;