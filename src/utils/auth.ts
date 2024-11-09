const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
const TOKEN_KEY = process.env.NEXT_PUBLIC_TOKEN_KEY;

export const loginAdmin = (email: string, password: string) => {
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    localStorage.setItem(TOKEN_KEY || 'default_token_key', 'true');
    return true;
  }
  return false;
};

export const isAdminLoggedIn = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(TOKEN_KEY || 'default_token_key') === 'true';
  }
  return false;
};

export const logoutAdmin = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(TOKEN_KEY || 'default_token_key');
  }
};
