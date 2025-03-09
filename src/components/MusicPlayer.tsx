import React, { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { useGetNowPlayingQuery } from '../store/api';

const STREAM_URL = 'https://live.lofiradio.ru/lofi_mp3_128';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { data: nowPlaying, refetch } = useGetNowPlayingQuery(undefined, {
    pollingInterval: 1000,
  });

  const togglePlay = () => {
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
    <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
      <audio ref={audioRef} src={STREAM_URL} />
      
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Lo-Fi Radio</h2>
        <p className="text-gray-600 text-sm animate-pulse">
          {nowPlaying?.title || 'Загрузка...'}
        </p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={togglePlay}
          className="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-4 transition-all duration-300 transform hover:scale-105"
        >
          {isPlaying ? (
            <Pause className="w-8 h-8" />
          ) : (
            <Play className="w-8 h-8" />
          )}
        </button>
      </div>
    </div>
  );
}