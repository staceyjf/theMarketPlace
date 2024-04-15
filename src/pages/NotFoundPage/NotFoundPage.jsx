import React, { useEffect } from "react";

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "Something has gone wrong";
    return () => (document.title = "Welcome to ");
  }, []);
  return (
    <main>
      <h2>404: Could not find the page you're looking for</h2>
    </main>
  );
};

export default NotFoundPage;
