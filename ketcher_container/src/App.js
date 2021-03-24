// import logo from './logo.svg';
// import './App.css';
import React from 'react'
// @ts-ignore
// import Miew from 'miew'
// import 'miew/dist/Miew.min.css'
// @ts-ignore
import { Editor } from 'ketcher-react'
// @ts-ignore
import { RemoteStructServiceProvider } from 'ketcher-core'
import 'ketcher-react/dist/index.css'
// import styled from "styled-components"

// (global as any).Miew = Miew

let structServiceProvider: any = new RemoteStructServiceProvider(
    process.env.REACT_APP_HOSTED_INDIGO_URL // see environment in docker-compose
)
if (process.env.MODE === 'standalone') {
  const { StandaloneStructServiceProvider } = require('ketcher-standalone')
  structServiceProvider = new StandaloneStructServiceProvider()
}

function sayHello() {
  alert('You clicked me!');
}
// Usage

function App() {
  return (
    <div>
    <Editor
      staticResourcesUrl={process.env.PUBLIC_URL}
      structServiceProvider={structServiceProvider}
    />
    <button onClick={sayHello}>Default</button>;
    </div>
  );
}

export default App;
