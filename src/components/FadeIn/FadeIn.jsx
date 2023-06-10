import React, { useEffect, useState } from 'react';
import './styles.css';

const FadeIn = ({ children }) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setShouldRender(true);
  }, []);

  return (
    shouldRender && <div className="transition">{children}</div>
  );
};

export default FadeIn;
