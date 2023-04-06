import { clientRequest } from './makeRequest';

export function postMeme(data: object) {
  return clientRequest('/api/new-meme', {
    method: 'POST',
    data,
  });
}
