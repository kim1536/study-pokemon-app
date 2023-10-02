import React from 'react'
import { useEffect, useState } from 'react';

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  
  useEffect(() => {

   const habdler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay);
  
    return () => {
      clearTimeout(habdler)
    }
  }, [value, delay])
  
  return debouncedValue;
}
