import { defineConfig } from '@playwright/test';
export default defineConfig({
  use: {
    baseURL: 'https://artlist.io/',
    extraHTTPHeaders: {
      'Accept': 'application/json',
    },
  }
});