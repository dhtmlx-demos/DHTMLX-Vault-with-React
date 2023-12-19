import VaultComponent from "./Vault";
import { getData } from "./data";
import { useState } from "react";

function App() {
  let [data] = useState(getData());
  return <VaultComponent data={data} />;
}

export default App;
