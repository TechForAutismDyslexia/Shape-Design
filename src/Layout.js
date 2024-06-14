import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col justify-center items-center h-full">
        <div>{children}</div>
      </main>
    </div>
  );
}

export default Layout;
