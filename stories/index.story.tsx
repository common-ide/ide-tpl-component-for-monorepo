import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  [CLASSNAME],
  [CLASSNAME]Factory,
  I[CLASSNAME]Props
} from '../demo/simple/main';
import { Client } from 'ette';


const {
  ComponentWithStore: [CLASSNAME]WithStore,
  client,
  stores: SimpleStores
} = [CLASSNAME]Factory();

const props: I[CLASSNAME]Props = {
  visible: true
};

function onClick(value: string) {
  console.log('当前点击：', value);
}

const onClickWithStore = (client: Client, isSimple = false) => (
  value: string,
  actionContext: any
) => {
  const { context } = actionContext;
  console.log('[onClick] action context:', context);

  client.put(`/model`, {
    name: 'text',
    value: `gggg${Math.random()}`.slice(0, 1 + 10 * Math.random())
  });

  isSimple &&
    console.log('stores.model.textLength: ', SimpleStores.model.textLength);
};


export const Simple = () => {
  return <[CLASSNAME] {...props} onClick={onClick} />
}

export const WithStore = () => {
  return  <[CLASSNAME]WithStore onClick={onClickWithStore(client, true)} />
}

export default {
  component: [CLASSNAME],
  title: 'Components/[CLASSNAME]',
}  as ComponentMeta<typeof [CLASSNAME]>

