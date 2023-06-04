export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SUPABASE_URL: string;
      SUPABASE_KEY: string;
    }
  }
  interface ComponentProps {
    _id?: string;
    _style?: React.CSSProperties;
    children?: React.ReactNode;
  }
}
