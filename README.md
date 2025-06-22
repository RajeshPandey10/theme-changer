# React Theme Changer

[![npm version](https://badge.fury.io/js/@rajace2005%2Ftheme-changer.svg)](https://badge.fury.io/js/@rajace2005%2Ftheme-changer) [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A tiny, framework-agnostic React utility to toggle between light and dark mode. Works out of the box with CommonJS and ES module consumers, and integrates seamlessly with plain CSS, CSS variables, or Tailwind CSS (darkMode='class').

## Installation

```bash
npm install @rajace2005/theme-changer
# or
yarn add @rajace2005/theme-changer
```

## Quick Start

1.  **Wrap your app**

    ```jsx
    // src/main.jsx (or index.jsx)
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App';
    import { ThemeProvider } from '@rajace2005/theme-changer';
    import './index.css';

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </React.StrictMode>
    );
    ```

    The `ThemeProvider` automatically adds `class="light"` or `class="dark"` to your `<body>` element.

2.  **Toggle the theme**

    ```jsx
    // any component
    import React from 'react';
    import { useTheme } from '@rajace2005/theme-changer';

    const ThemeToggleButton = () => {
      const { theme, toggleTheme } = useTheme();
      return (
        <button onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      );
    };

    export default ThemeToggleButton;
    ```

3.  **Tailwind CSS integration**

    Include these directives in your CSS entry (e.g., `index.css`):

    ```css
    @import "tailwindcss";

    @layer base {
      body.light {
        @apply bg-white text-gray-800;
      }
      body.dark {
        @apply bg-gray-900 text-white;
      }
      body {
        @apply transition-colors duration-300;
      }
    }
    ```

    Use dark variants in JSX:

    ```jsx
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
      {/* ... */}
    </div>
    ```

## API

### ThemeProvider

A React component that provides theme context and toggling function.

**Props:**

- `children`: React.ReactNode — the app components to render.

### useTheme()

A hook that returns current theme and toggle function.

**Returns:**

- `theme`: `'light' | 'dark'`
- `toggleTheme()`: `() => void`

## TypeScript Support

Declaration files are included. Import with:
```ts
import { ThemeProvider, useTheme } from '@rajace2005/theme-changer';
```

## Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repo
2. Create a branch (`git checkout -b feature/xyz`)
3. Commit your changes (`git commit -m 'feat: add xyz'`)
4. Open a pull request

## License

ISC © Rajesh Pandey
