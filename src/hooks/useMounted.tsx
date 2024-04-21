'use client';
import { useEffect, useState } from 'react';

export default function useMounted() {
  const [state, setState] = useState(false);
  useEffect(() => {
    setState(true);
  }, []);
  return state;
}