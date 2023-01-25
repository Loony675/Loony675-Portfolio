// INSTALLATION du projet REACT
_Cette commande permet d'installer un build pré-fait de REACT afin d'initialiser un projet
npx create-next-app@latest
yarn install

// INSTALLATION DE TAILWINDCSS 
_Tailwindcss est la base du css de ce site. Il permet de faire du in-line style
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
// Scrollbar tailwind
yarn add -D tailwind-scrollbar

// INSTALLATION DES ICONS
yarn add react-social-icons

// INSTALLATION DE FRAMER-MOTION
_Librairie pour l'animation sur le site
yarn add framer-motion

// ANIMATION TYPEWRITER
yarn add react-simple-typewriter 

// FORMULAIRE DE CONTACT
yarn add react-hook-form

// SANITY
npm install @sanity/cli
sanity init

yarn add next-sanity @portabletext/react @sanity/image-url

// DEPLOIEMENT VERCEL
sudo npm i -g vercel
vercel build
vercel deploy --prebuilt
vercel --prod