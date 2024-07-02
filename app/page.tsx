'use client';
import Header from './Components/Header';
import Main from './Components/MainFeed';
import { Provider } from 'react-redux';
import store from './store';
import { Suspense } from 'react';
import Loading from './loading';
export default function Home() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <Header />
        <Main />
      </Suspense>
    </Provider>
  );
}
