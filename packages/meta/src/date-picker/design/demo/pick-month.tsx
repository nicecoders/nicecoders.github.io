import type { FC } from 'react';
import React from 'react';
import { DatePicker } from '@nicecode/meta';

const { _InternalPanelDoNotUseOrYouWillBeFired: PureDatePicker } = DatePicker;

const Demo: FC = () => <PureDatePicker picker="month" />;

export default Demo;
