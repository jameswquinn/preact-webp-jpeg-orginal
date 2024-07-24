# Preact WebP JPEG Support

A Preact application that detects browser support for WebP images and falls back to JPEG when necessary. This project demonstrates how to implement responsive images with modern and legacy format support.

## Features

- Automatic WebP support detection
- Fallback to JPEG for browsers without WebP support
- Responsive image loading with multiple sizes
- Webpack configuration for image optimization

## Prerequisites

- Node.js (v14 or later recommended)
- npm (v6 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/jameswquinn/preact-webp-jpeg-orginal.git
   cd preact-webp-jpeg-orginal
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage

### Development

To start the development server:

```
npm start
```

This will start the webpack-dev-server. Open `http://localhost:8080` in your browser to view the app.

### Production Build

To create a production build:

```
npm run build
```

The optimized files will be generated in the `dist/` directory.

## Project Structure

```
preact-webp-jpeg/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── ResponsiveImage.jsx
│   ├── utils/
│   │   └── checkWebpSupport.js
│   ├── app.jsx
│   └── index.js
├── webpack.config.js
├── package.json
└── README.md
```

## Key Components

### ResponsiveImage

The `ResponsiveImage` component (`src/components/ResponsiveImage.jsx`) is the core of this project. It detects WebP support and renders the appropriate image format and size.

Usage:

```jsx
import ResponsiveImage from './components/ResponsiveImage';

function MyComponent() {
  return (
    <ResponsiveImage
      src="./images/example.jpg"
      alt="Example Image"
      sizes={[300, 600, 1200]}
    />
  );
}
```

### checkWebpSupport

The `checkWebpSupport` utility (`src/utils/checkWebpSupport.js`) detects if the browser supports WebP images.

## Webpack Configuration

The webpack configuration (`webpack.config.js`) is set up to:

- Transform and optimize images
- Generate WebP versions of images
- Bundle JavaScript with Babel support

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
