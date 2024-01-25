import React from 'react';
import { Popover } from '@nicecode/meta';

const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPopover } = Popover;

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const App: React.FC = () => (
  <>
    <InternalPopover content={content} title="Title" />
    <InternalPopover
      content={content}
      title="Title"
      placement="bottomLeft"
      style={{ width: 250 }}
    />
  </>
);

export default App;
