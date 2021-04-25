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
          content='boa tarde galera'
        />

        <ChannelMessage
          author='Gabriel Fernandes'
          date='25/04/2021'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada eu diam eu mattis. Etiam mi elit. '
        />

        <ChannelMessage author='monteiro' date='25/04/2021' content='??' />

        <ChannelMessage
          author='Groovy'
          date='25/04/2021'
          content='Tocando música ficcionalmente, pois essa realidade é apenas um clone do discord'
          isBot
        />

        <ChannelMessage
          author='monteiro'
          date='25/04/2021'
          content='oq tá acontecendo?????'
        />

        <ChannelMessage
          author='Gabriel Fernandes'
          date='25/04/2021'
          content='Pellentesque vitae ultrices dui. Nam a scelerisque nisl. In turpis nibh, sagittis at pretium id, scelerisque eu ligula. Cras laoreet blandit nisl in pretium.elit. '
        />

        <ChannelMessage
          author='monteiro'
          date='25/04/2021'
          content='meu deus'
        />

        <ChannelMessage
          author='Sampaio Leal'
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
