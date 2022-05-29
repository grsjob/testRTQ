import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app/App';
import {Provider} from 'react-redux'
import {setupStore} from "./store/store";

const store = setupStore()
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
