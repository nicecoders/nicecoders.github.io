import type { FC } from 'react';
import React from 'react';
import { DatePicker } from '@nicecode/meta';

const { _InternalRangePanelDoNotUseOrYouWillBeFired: PureRangePicker } = DatePicker;

const Demo: FC = () => <PureRangePicker picker="year" />;

export default Demo;
