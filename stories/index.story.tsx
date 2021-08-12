import React from 'react';
import { storiesOf } from '@storybook/react';

import {[CLASSNAME], I[CLASSNAME]Props, [CLASSNAME]Factory} from '../src/index';


storiesOf('[CLASSNAME]', module).add('default', () => {

    const { ComponentWithStore: [CLASSNAME]WithStore, client } = [CLASSNAME]Factory();

    function onClickWithStore(value: string) {
        client.put(`/model`, {
        name: 'text',
        value: `gggg${Math.random()}`.slice(0, 8)
        });
    }

  return <>
        <[CLASSNAME]WithStore onClick={onClickWithStore}/>
    </>
});
