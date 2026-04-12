'use client';
import { useEffect, useState } from 'react';
import { AnimatedNumber } from './motion-primitives/animated-number';

 type AnimatedNumberProps = {
    number: number,
   
}
export function AnimatedNumberBasic({
   number,
   
}: AnimatedNumberProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(number);
  }, []);

  return (
    <div className='flex items-center justify-center'>
     
      <AnimatedNumber
        className='items-center text-3xl font-bold text-zinc-800 dark:text-zinc-50'
        springOptions={{
          bounce: 0,
          duration: 2000,
        }}
        value={value}
      />
    </div>
  );
}
