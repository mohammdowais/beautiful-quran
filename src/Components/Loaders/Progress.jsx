import React from 'react';
import * as Progress from '@radix-ui/react-progress';

const ProgressDemo = () => {
  const [progress, setProgress] = React.useState(49);

  React.useEffect(() => {
    try {
        const timer = setInterval(() => setProgress(prev=>prev < 89?prev+10:prev<98?prev+1:prev), 800);
        return () => clearTimeout(timer);
    } catch (error) {
        console.log(error)
    }
  }, []);

  return (
    <Progress.Root
      className="relative overflow-hidden border border-white rounded-full w-[300px] h-[10px]"
      style={{
        transform: 'translateZ(0)',
      }}
      value={progress}
    >
      <Progress.Indicator
        className="bg-white w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
};

export default ProgressDemo;