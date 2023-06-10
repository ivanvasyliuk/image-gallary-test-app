import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

const KEY = 'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';

export const Photos = {
  fetchPhotos() {
    return axios.get(`/photos/?client_id=${KEY}`);
  },
};
