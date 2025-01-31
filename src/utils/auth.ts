const ADMIN_EMAIL = 'josephndaye36@gmail.com';
const ADMIN_PASSWORD = 'Jos123R456';
const TOKEN_KEY = 'admin_token';

export const loginAdmin = (email: string, password: string) => {
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    // Store a token in localStorage (for client-side checks) and set a cookie
    localStorage.setItem(TOKEN_KEY, 'true');
    return true;
  }
  return false;
};

export const isAdminLoggedIn = () => {
  // Check localStorage for the admin token
  if (typeof window !== 'undefined') {
    return localStorage.getItem(TOKEN_KEY) === 'true';
  }
  return false;
};

export const logoutAdmin = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(TOKEN_KEY);  // Clear admin token on logout
  }
};
