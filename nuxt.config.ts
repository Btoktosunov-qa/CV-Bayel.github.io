import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [],
  css: ["~/assets/css/main.css"],
  
  // Указываем режим статической генерации, чтобы Nitro корректно собирал HTML
  ssr: true,

  nitro: {
    static: true,
    prerender: {
      routes: ["/cv-data.json"],
    },
  },
  app: {
    // ИСПРАВЛЕНО: Меняем '/' на имя твоего репозитория с слэшами по бокам
    baseURL: '/Charonbb.github.io/', 
    buildAssetsDir: '/_nuxt/', // Жестко привязываем пути ассетов к baseURL
    
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: "https://charonbb.github.io",
      email: "b.toktosunof@gmail.com",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});