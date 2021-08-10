import React from 'react';
import { storiesOf } from '@storybook/react';

import [CLASSNAME], {I[CLASSNAME]Props} from '../src';

storiesOf('[CLASSNAME]', module).add('default', () => {
    const props:I[CLASSNAME]Props = {
        visible: true
    };
  return <>
        <[CLASSNAME]/>
    </>
});
