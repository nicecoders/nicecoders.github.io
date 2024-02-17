export const isBrowser = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

const isChrome = () =>{
  const winNav = isBrowser && window.navigator;
  const vendorName = winNav && winNav?.vendor;
  const userAgent = winNav && winNav.userAgent;

  //@ts-ignore
  const isChromium = isBrowser && typeof chrome !== 'undefined';

  //@ts-ignore
  const isOpera = isBrowser && typeof opr !== 'undefined';
  const isIEedge = userAgent && userAgent.indexOf('Edge') > -1;

  const isIOSChrome = !!(userAgent && userAgent.match('CriOS'));
  const isDesktopChrome = isChromium && vendorName === 'Google Inc.' && !isOpera && !isIEedge;

  return isIOSChrome || isDesktopChrome;
}
export default isChrome;
