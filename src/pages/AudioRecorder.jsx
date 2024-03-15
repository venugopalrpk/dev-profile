import React, { useState, useRef } from 'react';

function AudioRecorder() {
	const [isRecording, setIsRecording] = useState(false);
	const [audioUrl, setAudioUrl] = useState(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const mediaRecorderRef = useRef(null);
	const audioRef = useRef(null);

	const startRecording = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
			mediaRecorderRef.current = new MediaRecorder(stream);
			mediaRecorderRef.current.ondataavailable = (e) => {
				setAudioUrl(URL.createObjectURL(e.data));
			};
			mediaRecorderRef.current.start();
			setIsRecording(true);
		} catch (err) {
			console.error('Failed to start recording', err);
		}
	};

	const stopRecording = () => {
		mediaRecorderRef.current.stop();
		setIsRecording(false);
		// Reset the audio player time
		if (audioRef.current) {
			audioRef.current.currentTime = 0;
			audioRef.current.pause();
		}
	};

	const togglePlayback = () => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause();
			} else {
				audioRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	return (
		<div>
			<button onClick={isRecording ? stopRecording : startRecording}>
				{isRecording ? 'Stop Recording' : 'Start Recording'}
			</button>
			{audioUrl && (
				<>
					<audio
						ref={audioRef}
						src={audioUrl}
						onEnded={() => setIsPlaying(false)}
					/>
					<button onClick={togglePlayback}>
						{isPlaying ? 'Pause' : 'Play'}
					</button>
				</>
			)}
		</div>
	);
}

export default AudioRecorder;
