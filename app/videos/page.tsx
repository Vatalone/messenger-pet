'use client';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import Loading from '../loading';
import Header from '../Components/Header';
import store from '../store';
import Main from '../Components/MainVideos';
export default function Vids() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <Header />
        <Main />
      </Suspense>
    </Provider>
  );
}
