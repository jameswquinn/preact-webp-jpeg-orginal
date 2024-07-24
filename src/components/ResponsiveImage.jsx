import { h } from 'preact';
import { useEffect, useState, useCallback, memo } from 'preact/hooks';
import { checkWebpSupport } from '../utils/checkWebpSupport';

const ResponsiveImage = memo(({ src, alt, sizes }) => {
  const [supportsWebp, setSupportsWebp] = useState(false);

  useEffect(() => {
    checkWebpSupport(setSupportsWebp);
  }, []);

  const getImageSources = useCallback(() => {
    const format = supportsWebp ? 'webp' : 'jpeg';
    return sizes.map(size => ({
      srcSet: `${src}?format=${format}&size=${size}w`,
      size: `${size}w`,
      type: `image/${format}`
    }));
  }, [src, sizes, supportsWebp]);

  const sources = getImageSources();

  return (
    <picture>
      {sources.map(source => (
        <source key={source.size} {...source} />
      ))}
      <img src={`${src}?size=${sizes[0]}w`} alt={alt} />
    </picture>
  );
});

export default ResponsiveImage;
