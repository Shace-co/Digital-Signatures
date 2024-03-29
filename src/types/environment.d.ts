declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DOCUSIGN_CLIENT_ID: string;
      DOCUSIGN_USER_ID: string;
      OAUTHBASEPATH: string;
      CLIENT_SECRET: string;
      REDIRECT_URI: string;
      PRIVATE_KEY: string;
      PORT?: string;
    }
  }
}

export {};
