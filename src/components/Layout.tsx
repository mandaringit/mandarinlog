import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <h1>레이아웃 상단</h1>
      {children}
      <h1>레이아웃 하단</h1>
    </div>
  );
};

export default Layout;
