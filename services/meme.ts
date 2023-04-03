import { clientRequest } from './makeRequest';

export function postMeme(data: object) {
  return clientRequest('/new-meme/api', {
    method: 'POST',
    data,
  });
}
