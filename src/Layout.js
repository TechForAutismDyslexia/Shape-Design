import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-blue-200">
        <div>{children}</div>
    </div>
  );
}

export default Layout;
