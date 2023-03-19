import defaultImage from 'images/no-image.gif';

export function isAvailableImage(path) {
  console.log(path);
  return path ? `https://image.tmdb.org/t/p/w500/${path}` : defaultImage;
}