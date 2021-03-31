import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../API/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {
	const [videos, setVideos] = useState([]);
	const [selectedVideos, setSelectedVideos] = useState(null);

	useEffect(() => {
		onTermSubmit('');
	}, []);

	const onTermSubmit = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term,
			},
		});

		setVideos(response.data.items);
		setSelectedVideos(response.data.items[0]);
	};

	const onVideoSelect = (video) => {
		setSelectedVideos(video);
	};

	return (
		<div className="ui container">
			<SearchBar onSubmit={onTermSubmit} />
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail video={selectedVideos} />
					</div>
					<div className="five wide column">
						<VideoList onVidSelect={onVideoSelect} videos={videos} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
