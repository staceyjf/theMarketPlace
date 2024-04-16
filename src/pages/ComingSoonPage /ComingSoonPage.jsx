import React, { useEffect } from "react";

const ComingSoonPage = () => {
  useEffect(() => {
    document.title = "Coming soon";
    return () => (document.title = "Welcome to theMarketPlace");
  }, []);
  return (
    <main>
      <h2>Watch this space coming soon</h2>
    </main>
  );
};

export default ComingSoonPage;
