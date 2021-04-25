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
      <Role>Disponível - 3</Role>
      <UserRow nickname='monteiro' />
      <UserRow nickname='Gabriel Fernandes' />
      <UserRow nickname='Sampaio Leal' />

      <UserRow nickname='Groovy' isBot />
      <Role>Offline - 14</Role>
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
