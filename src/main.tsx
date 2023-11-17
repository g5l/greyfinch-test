import {Provider} from "urql";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {client} from "@/graphql/api";
import {Home} from '@/pages';
import './main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider value={client}>
      <Home/>
    </Provider>
  </React.StrictMode>,
);
