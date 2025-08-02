import React from "react";

const LockerIframe = () => {
  return (
    <div style={{ width: "100%", minHeight: "700px"}}>
     

      <iframe
        src="https://bestlocker.eu/iframe/e1ae7cea-6f92-11f0-9d00-8a5fb7be40ea"
        title="Content Locker"
        width="100%"
        height="600px"
        style={{
          border: "none",
          borderRadius: "10px",
          overflow: "hidden"
        }}
        allow="clipboard-write; fullscreen"
      ></iframe>
    </div>
  );
};

export default LockerIframe;
