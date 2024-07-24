import { h } from 'preact';
import ResponsiveImage from './components/ResponsiveImage';

const App = () => (
  <div>
    <h1>Welcome to Preact WebP JPEG Support</h1>
    <ResponsiveImage
      src="./images/example.jpg"
      alt="Example Image"
      sizes={[300, 600, 1200]}
    />
  </div>
);

export default App;
