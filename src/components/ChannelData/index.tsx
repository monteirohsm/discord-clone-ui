import React from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  return (
    <Container>
      <Messages>
        <ChannelMessage
          author='monteiro'
          date='25/04/2021'
          content='to fazendo um clone do discord'
        />

        <ChannelMessage
          author='Groovy'
          date='25/04/2021'
          content='Tocando música'
          isBot
        />

        <ChannelMessage
          author='Gabriel Fernandes'
          date='25/04/2021'
          content={
            <>
            <Mention>@monteiro</Mention> bora jogar portal
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input type='text' placeholder='Conversar em chat-livre' />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
