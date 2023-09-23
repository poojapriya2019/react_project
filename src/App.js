import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import WatchSuggestionVideo from './components/WatchSuggestionVideo';

const approuter = createBrowserRouter([{
    path: "/",
    element: <Body/>,
    children: [
        {
            path: "/",
            element: <MainContainer />
        },
        {
            path: "/watch",
            element: <WatchPage />
        },
        {
            path: "/results",
            element: <WatchSuggestionVideo />
        }
    ]
}])

function App() {
    return (
     <Provider store={store}>
        <div>
          <Head/>
          <RouterProvider router={approuter} />
        </div>
     </Provider>
    )
}

export default App;