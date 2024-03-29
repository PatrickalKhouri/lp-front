import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    };
    const [token, setToken] = useState();

    const saveToken = userToken => {
        sessionStorage.setItem('token', userToken);
        setToken(userToken.token);
      };

    return {
        setToken: saveToken,
        token
    }
}