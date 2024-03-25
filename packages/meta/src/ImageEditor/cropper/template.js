import { NAMESPACE } from './constants';

export default `
<div class="${NAMESPACE}-container" touch-action="none">
  <div class="${NAMESPACE}-drag-box"  data-${NAMESPACE}-action="crop"></div>
  <div class="${NAMESPACE}-crop-box"  >
    <span class="${NAMESPACE}-view-box"></span>
    <span class="${NAMESPACE}-face" data-${NAMESPACE}-action="move"> ></span>
    <span class="${NAMESPACE}-line line-e" data-${NAMESPACE}-action="e"></span>
    <span class="${NAMESPACE}-line line-n" data-${NAMESPACE}-action="n"></span>
    <span class="${NAMESPACE}-line line-w" data-${NAMESPACE}-action="w"></span>
    <span class="${NAMESPACE}-line line-s" data-${NAMESPACE}-action="s"></span>
    <span class="${NAMESPACE}-point point-e" data-${NAMESPACE}-action="e"></span>
    <span class="${NAMESPACE}-point point-n" data-${NAMESPACE}-action="n"></span>
    <span class="${NAMESPACE}-point point-w" data-${NAMESPACE}-action="w"></span>
    <span class="${NAMESPACE}-point point-s" data-${NAMESPACE}-action="s"></span>
    <span class="${NAMESPACE}-point point-ne" data-${NAMESPACE}-action="ne"></span>
    <span class="${NAMESPACE}-point point-nw" data-${NAMESPACE}-action="nw"></span>
    <span class="${NAMESPACE}-point point-sw" data-${NAMESPACE}-action="sw"></span>
    <span class="${NAMESPACE}-point point-se" data-${NAMESPACE}-action="se"></span>
  </div>
</div>
`;
