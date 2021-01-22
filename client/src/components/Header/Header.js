import React from 'react';

const Header = ({Dark,children,className}) => {
  const dark = !!Dark?"dark":"light";
  return (
    <nav className={`navbar navbar-${dark} bg-${dark}`+(className?" "+className:"")}>
      <span className="navbar-brand">{children}</span>
    </nav>
  )
}

export default Header;
