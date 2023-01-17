import { Link } from "./.nuxt/components";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss','@vueuse/nuxt',['@pinia/nuxt',{autoImports: ['defineStore','storeToRefs']}]],
    app:{
        head: {
            title: "Browse Movies, TV Shows and People",
            meta: [
              { charset: "utf-8" },
              { name: "viewport", content: "width=device-width, initial-scale=1" },
              {
                hid: "description",
                name: "description",
                content: "Browse Movies, TV Shows and People",
              },
              { hid: "author", name: "author", content: "Cherkaoui Dahaoui" },
              { hid: "og:locale", property: "og:locale", content: "en_US" },
              { hid: "og:title", property: "og:title", content: "NUXTFLIX" },
              {
                hid: "og:description",
                property: "og:description",
                content: "Browse Movies, TV Shows and People",
              },
              { hid: "og:type", property: "og:type", content: "website" },
              {
                hid: "og:url",
                property: "og:url",
                content: "https://movies.jason.codes/",
              },
              { name: "twitter:card", content: "summary" },
              { name: "twitter:title", content: "Movies" },
              {
                name: "twitter:description",
                content: "Browse Movies, TV Shows and People",
              },
              { name: "twitter:site", content: "@jasonujmaalvis" },
              { name: "twitter:creator", content: "@jasonujmaalvis" },
              {
                name: "twitter:image",
                content: "https://movies.jason.codes/icon-medium.png",
              },
            ],

            link:[
              {rel:"preconnect", href:"https://fonts.googleapis.com"},
              {rel:"preconnect", href:"https://fonts.gstatic.com" },
              {rel:"stylesheet" ,href:"https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"},
            ]
        },
    }
    
})
