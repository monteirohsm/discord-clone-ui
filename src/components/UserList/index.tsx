import React from 'react';
import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ''} />
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 2</Role>
      <UserRow nickname='monteiro' />

      <UserRow nickname='Groovy' isBot />
      <Role>Offline - 16</Role>
      <UserRow nickname='Gabriel Fernandes' />
      <UserRow nickname='Fulano' />
      <UserRow nickname='Fulano' />
      <UserRow nickname='Fulano' />
      <UserRow nickname='Fulano' />
      <UserRow nickname='Fulano' />
      <UserRow nickname='Fulano' />
      <UserRow nickname='Fulano' />
      <UserRow nickname='Fulano' />
      <UserRow nickname='Fulano' />
      <UserRow nickname='Fulano' />
      <UserRow nickname='Fulano' />
      <UserRow nickname='Fulano' />
      <UserRow nickname='Fulano' />
      <UserRow nickname='Fulano' />
      <UserRow nickname='Fulano' />
      <UserRow nickname='Fulano' />
    </Container>
  );
};

export default UserList;
