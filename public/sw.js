if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise((async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},a=(a,c)=>{Promise.all(a.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(a)};self.define=(a,i,o)=>{c[a]||(c[a]=Promise.resolve().then((()=>{let c={};const n={uri:location.origin+a.slice(1)};return Promise.all(i.map((a=>{switch(a){case"exports":return c;case"module":return n;default:return e(a)}}))).then((e=>{const a=o(...e);return c.default||(c.default=a),c}))})))}}define("./sw.js",["./workbox-1ca495a9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/b_aydS6IBoGFEHgj-g3_G/_buildManifest.js",revision:"b_aydS6IBoGFEHgj-g3_G"},{url:"/_next/static/b_aydS6IBoGFEHgj-g3_G/_ssgManifest.js",revision:"b_aydS6IBoGFEHgj-g3_G"},{url:"/_next/static/chunks/10.eea6a55bc1c192731040.js",revision:"b_aydS6IBoGFEHgj-g3_G"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.769d616c6833d9a6abc7.js",revision:"b_aydS6IBoGFEHgj-g3_G"},{url:"/_next/static/chunks/commons.07a15c5d0a1ab6ccca62.js",revision:"b_aydS6IBoGFEHgj-g3_G"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.96478707ef3fc00fbae7.js",revision:"b_aydS6IBoGFEHgj-g3_G"},{url:"/_next/static/chunks/framework.9d524150d48315f49e80.js",revision:"b_aydS6IBoGFEHgj-g3_G"},{url:"/_next/static/chunks/main-be98ac3a847433364f56.js",revision:"b_aydS6IBoGFEHgj-g3_G"},{url:"/_next/static/chunks/pages/_app-033d7b1a0218bb8cf0ee.js",revision:"b_aydS6IBoGFEHgj-g3_G"},{url:"/_next/static/chunks/pages/_error-c08c0825edba74181c9a.js",revision:"b_aydS6IBoGFEHgj-g3_G"},{url:"/_next/static/chunks/pages/index-948f8000e51d5f7c652f.js",revision:"b_aydS6IBoGFEHgj-g3_G"},{url:"/_next/static/chunks/polyfills-8f31809deb7932dd0187.js",revision:"b_aydS6IBoGFEHgj-g3_G"},{url:"/_next/static/chunks/webpack-74554f6c811625039c86.js",revision:"b_aydS6IBoGFEHgj-g3_G"},{url:"/_next/static/css/39ecb4005df8cf658c2f.css",revision:"b_aydS6IBoGFEHgj-g3_G"},{url:"/_next/static/css/7a24fef2d39617def67e.css",revision:"b_aydS6IBoGFEHgj-g3_G"},{url:"/favicons/android-chrome-144x144.png",revision:"12fa27bfb479fdf968b50f4716027c98"},{url:"/favicons/android-chrome-144x144.webp",revision:"a0d92edaa16c6a5a41cd6b17f4c9085a"},{url:"/favicons/android-chrome-192x192.png",revision:"fc56f800c688e4a970d5e950e6928a64"},{url:"/favicons/android-chrome-192x192.webp",revision:"16cc68a39ebadcce4d4d0359309b5978"},{url:"/favicons/android-chrome-256x256.png",revision:"12f3095378d5f3c6fbc5a5c03138b85a"},{url:"/favicons/android-chrome-256x256.webp",revision:"aca3494b365029c2dff03e5ec9eca8ea"},{url:"/favicons/android-chrome-36x36.png",revision:"5367fe03b6728e8372c835dbf25ad344"},{url:"/favicons/android-chrome-36x36.webp",revision:"fc3a5f684401981dbeea559745c0addd"},{url:"/favicons/android-chrome-384x384.png",revision:"2144005d22ada895e90416c4d40f2971"},{url:"/favicons/android-chrome-384x384.webp",revision:"f2ea65300543c08114d996f42a806ac9"},{url:"/favicons/android-chrome-48x48.png",revision:"e65d0aa0d11ade624cee42b3b149c7ad"},{url:"/favicons/android-chrome-48x48.webp",revision:"dc9b7c29da592e45912e1e80f964decf"},{url:"/favicons/android-chrome-512x512.png",revision:"9d7b0925f656c35eb91593b357ca9919"},{url:"/favicons/android-chrome-512x512.webp",revision:"d881f408011d299a9eedd6985fd58022"},{url:"/favicons/android-chrome-72x72.png",revision:"7865c16143d3ad4ac595a03a882f4b47"},{url:"/favicons/android-chrome-72x72.webp",revision:"e407ab86b54f77e1a67ccef2492d79f3"},{url:"/favicons/android-chrome-96x96.png",revision:"59759cdb12186c3c37590a8eb5f6c502"},{url:"/favicons/android-chrome-96x96.webp",revision:"0d6dad1a097f91d7788bcda1aa3c688d"},{url:"/favicons/apple-touch-icon-1024x1024.png",revision:"02c7add43772dd94532125b998934f30"},{url:"/favicons/apple-touch-icon-1024x1024.webp",revision:"59f89f99189d11e43fb3c7f2b6ff264d"},{url:"/favicons/apple-touch-icon-114x114.png",revision:"a946e7c7ffcf9635e9e70a0ac0b3cd9c"},{url:"/favicons/apple-touch-icon-114x114.webp",revision:"38ae892c95fdf5ee7e866f1991217320"},{url:"/favicons/apple-touch-icon-120x120.png",revision:"38fe5b9a92b18e52cde4aeac141f0598"},{url:"/favicons/apple-touch-icon-120x120.webp",revision:"a1a88ec6fcc3e5ab797c7369756911a7"},{url:"/favicons/apple-touch-icon-144x144.png",revision:"d2c603a0d5bfe89610ac3678f25011c1"},{url:"/favicons/apple-touch-icon-144x144.webp",revision:"04be4b2b0041db3a390c76b9177b3c09"},{url:"/favicons/apple-touch-icon-152x152.png",revision:"192032a70483c7f1157e6979c5de0831"},{url:"/favicons/apple-touch-icon-152x152.webp",revision:"cf8c255f10f7995f18127b99007c89f2"},{url:"/favicons/apple-touch-icon-167x167.png",revision:"59d764f39b150bf9b39d65eaa8d90874"},{url:"/favicons/apple-touch-icon-167x167.webp",revision:"991606c48b09d1c311f5954fa547ae5e"},{url:"/favicons/apple-touch-icon-180x180.png",revision:"6c54d397b8f1f8d1f08c1e4eeb561bfb"},{url:"/favicons/apple-touch-icon-180x180.webp",revision:"8f725d4d72a2d5d47865439af8b4545f"},{url:"/favicons/apple-touch-icon-57x57.png",revision:"443f6ab0635b0065981d7ea371114d45"},{url:"/favicons/apple-touch-icon-57x57.webp",revision:"437089914218f0e3820786b76756425e"},{url:"/favicons/apple-touch-icon-60x60.png",revision:"e4bd0ae8f192574cfbc9b7ed7c18e5ce"},{url:"/favicons/apple-touch-icon-60x60.webp",revision:"0a8185417487d68afbe61abfd5d6158d"},{url:"/favicons/apple-touch-icon-72x72.png",revision:"3e4f9f1b0cf9644a330be0bf92157858"},{url:"/favicons/apple-touch-icon-72x72.webp",revision:"2566d98bfa92bef74d2352c995495491"},{url:"/favicons/apple-touch-icon-76x76.png",revision:"287d1299ab9371a08ccd8eca6fec8095"},{url:"/favicons/apple-touch-icon-76x76.webp",revision:"9bd621be34d5f8f71d737b66437957db"},{url:"/favicons/apple-touch-icon-precomposed.png",revision:"6c54d397b8f1f8d1f08c1e4eeb561bfb"},{url:"/favicons/apple-touch-icon-precomposed.webp",revision:"8f725d4d72a2d5d47865439af8b4545f"},{url:"/favicons/apple-touch-icon.png",revision:"6c54d397b8f1f8d1f08c1e4eeb561bfb"},{url:"/favicons/apple-touch-icon.webp",revision:"8f725d4d72a2d5d47865439af8b4545f"},{url:"/favicons/apple-touch-startup-image-1125x2436.png",revision:"3c24b3e51cf63fdf370c8dcf70da28e5"},{url:"/favicons/apple-touch-startup-image-1125x2436.webp",revision:"5ec8c564ad81595eb1209695512c4565"},{url:"/favicons/apple-touch-startup-image-1136x640.png",revision:"c30d3f86d3913af7ec6cebddd1871704"},{url:"/favicons/apple-touch-startup-image-1136x640.webp",revision:"fa5fce4b06462e29eb1a8392f7d19130"},{url:"/favicons/apple-touch-startup-image-1242x2208.png",revision:"f4398254ebcdd99ca92463ab870eff35"},{url:"/favicons/apple-touch-startup-image-1242x2208.webp",revision:"9637622a3b6f159cf20c3584b3298c4a"},{url:"/favicons/apple-touch-startup-image-1242x2688.png",revision:"1cc01941dc6803c82766a44c8b96b531"},{url:"/favicons/apple-touch-startup-image-1242x2688.webp",revision:"ea3135fcd012ec46698bcc4370860c35"},{url:"/favicons/apple-touch-startup-image-1334x750.png",revision:"3b18ab4ddb28f30903fa7493e79cfdfd"},{url:"/favicons/apple-touch-startup-image-1334x750.webp",revision:"9358fb97c91020318b87ad06dde6cac8"},{url:"/favicons/apple-touch-startup-image-1536x2048.png",revision:"f7d5bc54eb9770787b2dabe4ca2b799f"},{url:"/favicons/apple-touch-startup-image-1536x2048.webp",revision:"c13942a0bcd4fb1cb68157414e022f1a"},{url:"/favicons/apple-touch-startup-image-1620x2160.png",revision:"b80b2a852705c8f7cdeeb63295eb546e"},{url:"/favicons/apple-touch-startup-image-1620x2160.webp",revision:"43853da12c0edba3cebc8e9e6ba5335e"},{url:"/favicons/apple-touch-startup-image-1668x2224.png",revision:"60d069092fe6aa539af0999c06cd15c1"},{url:"/favicons/apple-touch-startup-image-1668x2224.webp",revision:"8f17285be4f5716cc1855a88a1124ec1"},{url:"/favicons/apple-touch-startup-image-1668x2388.png",revision:"0a97d7a0628ef352eeee989829d6f453"},{url:"/favicons/apple-touch-startup-image-1668x2388.webp",revision:"69052d21b8f449086d6903013b6c1047"},{url:"/favicons/apple-touch-startup-image-1792x828.png",revision:"8ae7272be64e50a08ce9d46db87d7b07"},{url:"/favicons/apple-touch-startup-image-1792x828.webp",revision:"02f5e7963170c9fd82b7bba7159a021c"},{url:"/favicons/apple-touch-startup-image-2048x1536.png",revision:"d8a2651ca5d062b8cc6ad8d7d05ce508"},{url:"/favicons/apple-touch-startup-image-2048x1536.webp",revision:"47c8d8cc9cfe61c6659d61e80397e0e0"},{url:"/favicons/apple-touch-startup-image-2048x2732.png",revision:"084b9ff6bd10b56647b1da2b85e2a933"},{url:"/favicons/apple-touch-startup-image-2048x2732.webp",revision:"08e4e8da165116a62012496c6a2a3ae3"},{url:"/favicons/apple-touch-startup-image-2160x1620.png",revision:"1713b7880bf4caa387a85fc5be5f981a"},{url:"/favicons/apple-touch-startup-image-2160x1620.webp",revision:"13e9410c0b7ac307f0375d3a55257a06"},{url:"/favicons/apple-touch-startup-image-2208x1242.png",revision:"35baf72df16815bcff91f56515f6e2fe"},{url:"/favicons/apple-touch-startup-image-2208x1242.webp",revision:"5566aaa642fa852f502bc9e1723d54df"},{url:"/favicons/apple-touch-startup-image-2224x1668.png",revision:"20333e76e246b7467712cc8e66f8031a"},{url:"/favicons/apple-touch-startup-image-2224x1668.webp",revision:"7cbb6dfbcf18d05113597f3135f3ba8b"},{url:"/favicons/apple-touch-startup-image-2388x1668.png",revision:"f57bf012afdc2147c2348b8e0b0a3873"},{url:"/favicons/apple-touch-startup-image-2388x1668.webp",revision:"c48525f2cb5cd26af438a8399cc09102"},{url:"/favicons/apple-touch-startup-image-2436x1125.png",revision:"7b61825b037c346f9c8060bc010deb5b"},{url:"/favicons/apple-touch-startup-image-2436x1125.webp",revision:"9c20d631418ec673143cebaedc0a190c"},{url:"/favicons/apple-touch-startup-image-2688x1242.png",revision:"90c553ab1f6779faf52e59680272c8b0"},{url:"/favicons/apple-touch-startup-image-2688x1242.webp",revision:"100f89b3baa5f0f8fd3b20c03a7d2924"},{url:"/favicons/apple-touch-startup-image-2732x2048.png",revision:"10feff37fbb1d2dc57399b9da28f25db"},{url:"/favicons/apple-touch-startup-image-2732x2048.webp",revision:"efa9d4ccba2de7f51fe5d4131e0243d6"},{url:"/favicons/apple-touch-startup-image-640x1136.png",revision:"35403b69de2cd040091af685e2a6214a"},{url:"/favicons/apple-touch-startup-image-640x1136.webp",revision:"a0237e4b2dadd777f09343783a9a4295"},{url:"/favicons/apple-touch-startup-image-750x1334.png",revision:"b9cbb8c2b358647428d5b3fd488a5a94"},{url:"/favicons/apple-touch-startup-image-750x1334.webp",revision:"d9b32988497b76d1120b5ececf442c18"},{url:"/favicons/apple-touch-startup-image-828x1792.png",revision:"4dee8d93e11d9791a68755ccc83188c1"},{url:"/favicons/apple-touch-startup-image-828x1792.webp",revision:"7e3bca6fb281f3680099c810b0a0592d"},{url:"/favicons/browserconfig.xml",revision:"b5c8702cf5207e7724c940c63309f688"},{url:"/favicons/coast-228x228.png",revision:"4dd1d7d6904460a6966385beec6041d3"},{url:"/favicons/coast-228x228.webp",revision:"fa5d53cee547c84c2b4c6d10a339ef2c"},{url:"/favicons/favicon-16x16.png",revision:"360d73a7f61e2d125eb04d1b045ccb05"},{url:"/favicons/favicon-16x16.webp",revision:"f520936d311f6a8e30da9516adcfc246"},{url:"/favicons/favicon-32x32.png",revision:"3bf04645f8078a4323e8ca8052294bc5"},{url:"/favicons/favicon-32x32.webp",revision:"e45ed42f6a63dc9df8149fd69709cbb9"},{url:"/favicons/favicon-48x48.png",revision:"e65d0aa0d11ade624cee42b3b149c7ad"},{url:"/favicons/favicon-48x48.webp",revision:"dc9b7c29da592e45912e1e80f964decf"},{url:"/favicons/favicon.ico",revision:"abd3bdfdfe1f6b13b7fa2047e22c0a38"},{url:"/favicons/firefox_app_128x128.png",revision:"7f0161bf90f2c5bcf2f3b471cfa9103a"},{url:"/favicons/firefox_app_128x128.webp",revision:"2bfa2df343867fc0463ee7030d143e6a"},{url:"/favicons/firefox_app_512x512.png",revision:"8fcf9f4d4490d0c73e08a89840703254"},{url:"/favicons/firefox_app_512x512.webp",revision:"52bfb16f465d47baa3783db7f9a8c852"},{url:"/favicons/firefox_app_60x60.png",revision:"583d829d8861ef86ef10fcfe783d15bc"},{url:"/favicons/firefox_app_60x60.webp",revision:"7aa3ca41a0c26b19ed2364c9202faf40"},{url:"/favicons/manifest.json",revision:"6b4c1e65a0c1f5e79ee2099093aea5a3"},{url:"/favicons/manifest.webapp",revision:"a27164d33b4298ccc025e2db85340137"},{url:"/favicons/mstile-144x144.png",revision:"12fa27bfb479fdf968b50f4716027c98"},{url:"/favicons/mstile-144x144.webp",revision:"a0d92edaa16c6a5a41cd6b17f4c9085a"},{url:"/favicons/mstile-150x150.png",revision:"935549442fb404810ff6777d74ac1251"},{url:"/favicons/mstile-150x150.webp",revision:"3d660889e419f8908798a981f2fe4761"},{url:"/favicons/mstile-310x150.png",revision:"dd4aff4a527c4835c5f708af5df36a47"},{url:"/favicons/mstile-310x150.webp",revision:"6636437ed18999e319e360ff6adc3940"},{url:"/favicons/mstile-310x310.png",revision:"6905f0067eb7e810e51b82c5ce34fd46"},{url:"/favicons/mstile-310x310.webp",revision:"321f923f3c2eb66c6ebfa9fcd95cb05f"},{url:"/favicons/mstile-70x70.png",revision:"5a7b1eef6b5d1394181821f5d09297a1"},{url:"/favicons/mstile-70x70.webp",revision:"9cd58a7c7400a85f5e4bb06adb81b709"},{url:"/favicons/yandex-browser-50x50.png",revision:"2a3a9885c0e6630666f4c10fb7daecc4"},{url:"/favicons/yandex-browser-50x50.webp",revision:"aa8f030d307309fc30bf1a22ff30a24a"},{url:"/favicons/yandex-browser-manifest.json",revision:"67608fcb23a3b2379210976d66468e35"},{url:"/images/00XP-UFO-TEAR-jumbo.jpg",revision:"1057bc6ceffd7ae25556c9f21657df63"},{url:"/images/163-1631797_earth2-ufo-beam-darkness.png",revision:"e6cafb279afd9bbe7b740e86bed5b220"},{url:"/images/aliens_web.jpg",revision:"ece085a176cc55d3cb48274212d5db4f"},{url:"/images/c9f7bdfa4a232fed73632f7637ca2060.png",revision:"14975575f614ecb06284d80e74fe0be4"},{url:"/images/logo.webp",revision:"75fe96cdc7fc1b8571f1177871e1175b"},{url:"/images/needle.jpg",revision:"5d3dcf43c310572b08e8caabe1158fc9"},{url:"/images/space.webp",revision:"c22254adecf7e04516b142715d023606"},{url:"/images/ufo.png",revision:"6e9636804b137a0867e15f73ec32c2b4"},{url:"/images/unnamed.png",revision:"524e31e9bb925312e1d0f3d31a80e6d2"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
