# Courses App with Firebase Authentication

## Overview

This project is a **Courses App** that features a React authentication module using Firebase. It provides functionalities for user registration, login, Google sign-in, password reset, and user management. The authentication context allows components to access user information and perform authentication-related operations. Once logged in, users can access various resources and course content.

## Features

- User authentication with email and password
- Google Sign-In
- Password reset
- User state management with React Context API
- Access to a variety of course resources and content
- User information stored in localStorage

## Technologies

- React
- Firebase
- TypeScript

## Installation

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up Firebase**

    - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
    - Add Firebase configuration details to a `firebaseConfig.ts` file in the `src` directory.

    Example `firebaseConfig.ts`:

    ```typescript
    import { initializeApp } from 'firebase/app';
    import { getAuth, GoogleAuthProvider } from 'firebase/auth';

    const firebaseConfig = {
      apiKey: 'YOUR_API_KEY',
      authDomain: 'YOUR_AUTH_DOMAIN',
      projectId: 'YOUR_PROJECT_ID',
      storageBucket: 'YOUR_STORAGE_BUCKET',
      messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
      appId: 'YOUR_APP_ID',
    };

    const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app);
    export const googleAuthProvider = new GoogleAuthProvider();
    ```

## Usage

- **Sign In with Google**: Click the "Sign in with Google" button to authenticate using your Google account.
- **Login with Email and Password**: Enter your email and password to log in.
- **Register**: Use the registration form to create a new account.
- **Forgot Password**: Request a password reset email if you've forgotten your password.
- **Access Courses**: Once logged in, navigate to the `/Courses` page to view course content and access various resources.

## Deployment

The project is deployed on Netlify. You can access the live application here: [](#)

## Contact

For any questions or feedback, please contact me at:

- **Name**: Shivakumar 
- **Email**: [shivakumarhm9353@gmail.com](#)
- **Website**: [(https://shivanewweb.netlify.app/)](#)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Firebase for providing a robust authentication system.
- Material-UI for beautiful and responsive components.
- React community for ongoing support and improvements.
