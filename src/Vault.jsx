import { useEffect, useRef, useState } from "react";
import { Vault } from "@dhx/trial-vault";
import "@dhx/trial-vault/codebase/vault.min.css";

const VaultComponent = ({ data }) => {
  let [vault, setVault] = useState(null);
  const nodeRef = useRef(null);

  useEffect(() => {
    const vault = new Vault(nodeRef.current, {});
    setVault(vault);
    return () => vault.destructor();
  }, []);

  useEffect(() => {
    if (!vault) return;
    vault.data.parse(data);
  }, [vault, data]);

  return (
    <div
      ref={nodeRef}
      style={{ width: "440px", height: "400px", margin: "50px auto" }}
    ></div>
  );
};

export default VaultComponent;
