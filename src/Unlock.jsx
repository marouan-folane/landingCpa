import React, { useEffect, useState } from "react";

const LockerWithScript = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Delay showing the locker
    const timeout = setTimeout(() => {
      // 1. adblockRedirect
      const inlineScript = document.createElement("script");
      inlineScript.innerHTML =
        "const adblockRedirect = 'https://bestlocker.eu/adblock';";
      document.body.appendChild(inlineScript);

      // 2. Locker Script
      const lockerScript = document.createElement("script");
      lockerScript.id = "cpljs-dad085b0-6f94-11f0-a126-8a5fb7be40ea";
      lockerScript.src =
        "https://bestlocker.eu/iframeLoader/dad085b0-6f94-11f0-a126-8a5fb7be40ea";
      lockerScript.type = "text/javascript";
      document.body.appendChild(lockerScript);

      // 3. noscript fallback
      const noScriptTag = document.createElement("noscript");
      noScriptTag.innerHTML = `<meta http-equiv="refresh" content="0;url=https://bestlocker.eu/noscript"/>`;
      document.body.appendChild(noScriptTag);

      setIsLoading(false);

      // Cleanup
      return () => {
        document.body.removeChild(inlineScript);
        document.body.removeChild(lockerScript);
        document.body.removeChild(noScriptTag);
      };
    }, 3000); // 3 seconds delay before showing locker

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ width: "100%", minHeight: "700px", textAlign: "center", paddingTop: "100px" }}>
      {isLoading ? (
        <div>
          <h2>🔄 Preparing your download...</h2>
          <p>Please wait while we unlock the content for you.</p>
        </div>
      ) : (
        <h2>complete ther offer please to show you the links ...</h2> // Optional message, will be replaced by the locker
      )}
    </div>
  );
};

export default LockerWithScript;
