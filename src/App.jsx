import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Ragister from './pages/Ragister';

import { initializeApp } from "firebase/app";
import Addquiz from './pages/Addquiz';
import Viewquiz from './pages/Viewquiz';

const firebaseConfig = {
    apiKey: "AIzaSyBGy_dxreBtr8-NRcO0NxzTrvUnnEx6u_A",
    authDomain: "authentication2-c8eed.firebaseapp.com",
    databaseURL: "https://authentication2-c8eed-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "authentication2-c8eed",
    storageBucket: "authentication2-c8eed.appspot.com",
    messagingSenderId: "436191281704",
    appId: "1:436191281704:web:669ab804dcc44f9561eb1d",
    measurementId: "G-22WL3E5HYM"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "",
                    element: <Home />,
                },
                {
                    path: "login",
                    element: <Login />,
                },
                {
                    path: "register",
                    element: <Ragister />,
                },
                {
                    path: "Addquiz",
                    element: <Addquiz />,
                },
                {
                    path: "viewquiz",
                    element: <Viewquiz />,
                },

            ]
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
}

export default App;
