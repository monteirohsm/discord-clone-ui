import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span> Canais de texto </span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName='general' />
      <ChannelButton channelName='chilling' />
      <ChannelButton channelName='studying' />
      <ChannelButton channelName='links' />
      <ChannelButton channelName='avisos' />
    </Container>
  );
};

export default ChannelList;
