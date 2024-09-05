
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { auth, googleAuthProvider } from '../firebaseConfig';
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';

interface AuthContextType {
  user: { email: string } | any;
  setUser: React.Dispatch<React.SetStateAction<{ email: string } | null>>;
  logout: () => void;
  signInWithGoogle: () => void;
  loginWithEmailAndPassword: (email: string, password: string) => Promise<void>;
  registerWithEmailAndPassword: (email: string, password: string) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ email: string } | null>(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem('user');
      window.location.href = '/'; 
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const user = result.user;
      if (user) {
        const userEmail = user.email;
        if (userEmail) {
          setUser({ email: userEmail });
          localStorage.setItem('user', JSON.stringify({ email: userEmail }));
          window.location.href = '/courses';
        }
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const loginWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setUser({ email });
      localStorage.setItem('user', JSON.stringify({ email }));
      window.location.href = '/courses'; // Redirect to courses page
    } catch (error) {
      alert('Invalid email or password.');
    }
  };

  const registerWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setUser({ email });
      localStorage.setItem('user', JSON.stringify({ email }));
      window.location.href = '/courses'; 
    } catch (error) {
      alert('Error during registration. Please try again.');
    }
  };

  const forgotPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent!');
    } catch (error) {
      alert('Error sending password reset email.');
    }
  };

  useEffect(() => {}, [user]);

  return (
    <AuthContext.Provider
      value={{ user, setUser, logout, signInWithGoogle, loginWithEmailAndPassword, registerWithEmailAndPassword, forgotPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
