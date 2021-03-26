// import logo from './logo.svg';
import './App.css';
import React from 'react'
// @ts-ignore
// import Miew from 'miew'
// import 'miew/dist/Miew.min.css'
// @ts-ignore
import { Editor } from 'ketcher-react'
// @ts-ignore
import { RemoteStructServiceProvider } from 'ketcher-core'
import 'ketcher-react/dist/index.css'

// console.log(process.env.REACT_APP_HOSTED_INDIGO_URL)
// console.log( process.env.PUBLIC_URL)

let structServiceProvider: any = new RemoteStructServiceProvider(
  process.env.REACT_APP_HOSTED_INDIGO_URL // see environment in docker-compose
)

function App() {
  // console.log(structServiceProvider)
  return (
    <div>
    <Editor
      staticResourcesUrl={process.env.PUBLIC_URL}
      structServiceProvider={structServiceProvider}
    />
    </div>

  );
}

export default App;
