import React from "react";

const LockerIframe = () => {
  return (
    <div style={{ width: "100%", minHeight: "700px"}}>
     

      <iframe
        src="https://optilinklock.com/1830709"
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
