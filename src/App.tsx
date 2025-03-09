import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { MusicPlayer } from './components/MusicPlayer';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-4">
        <MusicPlayer />
      </div>
    </Provider>
  );
}

export default App;