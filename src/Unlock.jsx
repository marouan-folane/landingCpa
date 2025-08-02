import React, { useEffect } from "react";

const LockerWithScript = () => {
  useEffect(() => {
    // Create the <script> for adblockRedirect
    const inlineScript = document.createElement("script");
    inlineScript.innerHTML =
      "const adblockRedirect = 'https://bestlocker.eu/adblock';";
    document.body.appendChild(inlineScript);

    // Create the locker script
    const lockerScript = document.createElement("script");
    lockerScript.id = "cpljs-dad085b0-6f94-11f0-a126-8a5fb7be40ea";
    lockerScript.src =
      "https://bestlocker.eu/iframeLoader/dad085b0-6f94-11f0-a126-8a5fb7be40ea";
    lockerScript.type = "text/javascript";
    document.body.appendChild(lockerScript);

    // Create the <noscript> fallback
    const noScriptTag = document.createElement("noscript");
    noScriptTag.innerHTML = `<meta http-equiv="refresh" content="0;url=https://bestlocker.eu/noscript"/>`;
    document.body.appendChild(noScriptTag);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(inlineScript);
      document.body.removeChild(lockerScript);
      document.body.removeChild(noScriptTag);
    };
  }, []);

  return (
    <div style={{ width: "100%", minHeight: "700px" }}>
      <h2>Unlock Content</h2>
      <p>Please complete the action to continue.</p>
    </div>
  );
};

export default LockerWithScript;
  