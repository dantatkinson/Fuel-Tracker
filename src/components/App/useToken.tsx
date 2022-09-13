import { useState } from 'react';

export default function useToken() {
  const getToken = (): string => {
    const tokenString = sessionStorage.getItem('token') ?? JSON.stringify({});
    const userToken = JSON.parse(tokenString);
    return userToken.token ?? '';
  };

  const [token, setToken] = useState(getToken());

  type userToken = {
    token: string;
  }

  type saveTokenProps = {
    userToken: userToken;
  }

  const saveToken = ({ userToken }: saveTokenProps) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    console.log(userToken);
    setToken(userToken.token);
  };

  return {
    token,
    setToken: saveToken
  };
}
