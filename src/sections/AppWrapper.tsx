'use client';
import React, { useEffect, useState } from 'react';
import Loader from '../components/ui/Loader';


interface Props {
  children: React.ReactNode;
}

const AppWrapper = ({ children }: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : <>{children}</>;
};

export default AppWrapper;
