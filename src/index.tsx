import React from 'react';
import ReactDOM from 'react-dom/client';

import '@pluralsight/panda-preset/pando.css'
import "./index.css";

import { Pando } from "./App";

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<Pando />)