import React from 'react';
import SiteWrapper from './SiteWrapper';

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return <SiteWrapper>{children}</SiteWrapper>;
};

export default Layout;
