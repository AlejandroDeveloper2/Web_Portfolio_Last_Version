/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_API_KEY: string;
  readonly VITE_EMAIL_JS_SERVICE_ID: string;
  readonly VITE_EMAIL_JS_TEMPLATE_ID: string;
  readonly VITE_EMAIL_JS_API_KEY: string;
  readonly VITE_POCKETBASE_URL: string;
}
