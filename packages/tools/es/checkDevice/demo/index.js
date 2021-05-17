import React from 'react';
import { checkDevice } from '@nicecode/tools';

var Demo = function Demo() {
  return /*#__PURE__*/React.createElement("div", null, "\u662F\u5426\u5728PC\u7AEF\uFF1A", String(checkDevice.isPc()));
};

export default Demo;