# Vite + Vue2.7 + Vuex + Vue Router Starter

This is a starter template for Vue.js 2.7 projects using Vite as the build tool, Vuex for state management, and Vue Router for routing. The Vue Router automatically integrates routes from the `views` directory based on the configuration.

## Features

- **Vite**: Fast and lightweight development server with modern build setup.
- **Vue.js 2.7**: The progressive JavaScript framework for building user interfaces.
- **Vuex**: State management pattern and library for Vue.js applications.
- **Vue Router**: The official router for Vue.js with automatic integration of routes from `views` directory.

## Getting Started

### Prerequisites

Vite requires Node.js version 18+ or 20+.

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd vite-vue2-vuex-router-starter
npm install
# or
yarn install
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open your browser and visit [http://localhost:5173](http://localhost:5173) to view your application.

### Build for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

The production-ready files will be generated in the `dist` directory.

## Automatic Router Integration

Vue Router automatically integrates routes from the `views` directory using dynamic import based on file naming conventions (`*.router.js`).

### Custom Configuration

For Vite-specific configurations and optimizations, refer to the `vite.config.js` file in the root directory.

## Contributing

Feel free to fork this repository, make changes, and submit a pull request. Contributions are welcome!

---
