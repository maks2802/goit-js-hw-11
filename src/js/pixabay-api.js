const API_URL = 'https://pixabay.com/api/';
const API_KEY = '36431598-58be2282cdfdc5fc3df430395';

export async function fetchImages(query) {
  const url = `${API_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
  const response = await fetch(url);
  const data = await response.json();
  return data.hits;
}