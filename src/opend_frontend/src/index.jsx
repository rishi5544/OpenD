import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/App";
import { Principal } from "@dfinity/principal";

const CURRENT_USER_ID = Principal.fromText("2vxsx-fae");
export default CURRENT_USER_ID;

const init = async () => {
  const container = document.getElementById('root');
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<App tab="home" />);

};

init();
