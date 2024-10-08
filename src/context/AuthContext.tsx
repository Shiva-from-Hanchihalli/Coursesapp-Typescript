
// import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
// import { auth, googleAuthProvider } from '../firebaseConfig';
// import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';

// interface User {
//   email: string;
//   name?: string; 
// }

// interface AuthContextType {
//   user: User | any;
//   setUser: React.Dispatch<React.SetStateAction<User | null>>;
//   logout: () => void;
//   signInWithGoogle: () => void;
//   loginWithEmailAndPassword: (email: string, password: string) => Promise<void>;
//   registerWithEmailAndPassword: (email: string, password: string) => Promise<void>;
//   forgotPassword: (email: string) => Promise<void>;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(() => {
//     const storedUser = localStorage.getItem('user');
//     return storedUser ? JSON.parse(storedUser) : null;
//   });

//   const logout = async () => {
//     try {
//       await signOut(auth);
//       setUser(null);
//       localStorage.removeItem('user');
//       window.location.href = '/'; 
//     } catch (error) {
//       console.error('Error logging out:', error);
//     }
//   };

//   const signInWithGoogle = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleAuthProvider);
//       const user = result.user;
//       if (user) {
//         const userEmail = user.email;
//         const userName = user.displayName; // Get the user's display name
//         if (userEmail) {
//           setUser({ email: userEmail, name: userName || '' }); // Include the name if available
//           localStorage.setItem('user', JSON.stringify({ email: userEmail, name: userName || '' }));
//           window.location.href = '/Courses';
//         }
//       }
//     } catch (error) {
//       console.error('Error signing in with Google:', error);
//     }
//   };

//   const loginWithEmailAndPassword = async (email: string, password: string) => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       setUser({ email });
//       localStorage.setItem('user', JSON.stringify({ email }));
//       window.location.href = '/Courses'; 
//     } catch (error) {
//       alert('Login Successful!!!');
//     }
//   };

//   const registerWithEmailAndPassword = async (email: string, password: string) => {
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       setUser({ email });
//       localStorage.setItem('user', JSON.stringify({ email }));
//       window.location.href = '/Courses'; 
//     } catch (error) {
//       alert('Error during registration. Please try again.');
//     }
//   };

//   const forgotPassword = async (email: string) => {
//     try {
//       await sendPasswordResetEmail(auth, email);
//       alert('Password reset email sent!');
//     } catch (error) {
//       alert('Error sending password reset email.');
//     }
//   };

//   useEffect(() => {}, [user]);

//   return (
//     <AuthContext.Provider
//       value={{ user, setUser, logout, signInWithGoogle, loginWithEmailAndPassword, registerWithEmailAndPassword, forgotPassword }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { auth, googleAuthProvider } from '../firebaseConfig';
import { signInWithPopup, signInWithRedirect, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';

interface User {
  email: string;
  name?: string; 
}

interface AuthContextType {
  user: User | any;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  logout: () => void;
  signInWithGoogle: () => void;
  loginWithEmailAndPassword: (email: string, password: string) => Promise<void>;
  registerWithEmailAndPassword: (email: string, password: string) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
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
        const userName = user.displayName;
        if (userEmail) {
          setUser({ email: userEmail, name: userName || '' });
          localStorage.setItem('user', JSON.stringify({ email: userEmail, name: userName || '' }));
          window.location.href = '/Courses';
        }
      }
    } catch (error) {
      console.error('Error signing in with Google popup:', error);
      try {
        // Attempt redirect sign-in if popup fails
        await signInWithRedirect(auth, googleAuthProvider);
      } catch (redirectError) {
        console.error('Error during Google redirect sign-in:', redirectError);
      }
    }
  };
  
  const loginWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setUser({ email });
      localStorage.setItem('user', JSON.stringify({ email }));
      window.location.href = '/Courses'; 
    } catch (error) {
      alert('Login failed. Please check your credentials.');
      console.error('Error during email login:', error);
    }
  };

  const registerWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setUser({ email });
      localStorage.setItem('user', JSON.stringify({ email }));
      window.location.href = '/Courses'; 
    } catch (error) {
      alert('Error during registration. Please try again.');
      console.error('Error during registration:', error);
    }
  };

  const forgotPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent!');
    } catch (error) {
      alert('Error sending password reset email.');
      console.error('Error during password reset:', error);
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
