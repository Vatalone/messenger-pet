import Header from './Components/Header';
import Main from './Components/Main';
import { Provider } from 'react-redux';
import store from './store';
export default function Home() {
  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
}
