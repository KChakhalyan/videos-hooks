import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVidSelect }) => {
	const renderedList = videos.map((video) => {
		return <VideoItem onVidSelect={onVidSelect} video={video} />;
	});
	return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
