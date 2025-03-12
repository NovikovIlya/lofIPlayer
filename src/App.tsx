import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { MusicPlayer } from './components/MusicPlayer';

function App() {
  return (
    <Provider store={store}>
      <div style={{
          backgroundImage: `url(${'https://64.media.tumblr.com/951a840830691640d70865934f8fd582/39aa1ba00b601fc9-bc/s400x600/fe8d6cc7a76c2f9b08d1f969d41157a0f4cf6cc2.gif'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
        }} className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-4">
        <MusicPlayer />
      </div>
    </Provider>
  );
}

export default App;