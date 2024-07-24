export function checkWebpSupport(callback, timeout = 300) {
  const webP = new Image();
  let timedOut = false;

  const timer = setTimeout(() => {
    timedOut = true;
    callback(false);
  }, timeout);

  webP.onload = webP.onerror = function () {
    if (!timedOut) {
      clearTimeout(timer);
      callback(webP.height === 2);
    }
  };

  webP.src = "data:image/webp;base64,UklGRhYAAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
}
