import { auth } from '../credential';

export const getAuthToken = async () => {
  if (!auth.currentUser) {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      return storedToken;
    }
    throw new Error('No tienes una sesión activa. Por favor, inicia sesión.');
  }

  try {
    const freshToken = await auth.currentUser.getIdToken(true);
    localStorage.setItem('token', freshToken);
    return freshToken;
  } catch (error) {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      return storedToken;
    }
    throw error;
  }
};

export const getAuthHeaders = async (extraHeaders = {}) => {
  const token = await getAuthToken();

  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    ...extraHeaders,
  };
};
