import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen "style={{ backgroundColor: '#EAFFD0' }}>
        <div>{children}</div>
    </div>
  );
}

export default Layout;
