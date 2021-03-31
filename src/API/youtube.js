import axios from 'axios';

const KEY = 'AIzaSyARBdb2ODgaNLne_gsLQK7npE8cStrn5cU';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3/',
	params: {
		part: 'snippet',
		maxResults: 10,
		key: KEY,
	},
});
