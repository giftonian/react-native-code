import React, { useState, useEffect } from 'react';

function LifecycleDemo() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // useEffect to demonstrate initialization and cleanup
  useEffect(() => {
    console.log("Component Mounted: Initialization");
    
  }, []); // empty dependency array

  // useEffect to handle updates on `count`
  useEffect(() => {
    console.log("Component Updated: Re-render");

    // This effect runs every time `count` changes
    return () => {
      console.log("Cleanup before re-render");
    };
  }, [count]);


  const handleIncrement = () => setCount(count + 1);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>React Functional Component Lifecycle with useEffect</h2>

      {isVisible && (
        <div>
          <p>Count: {count}</p>
          <button onClick={handleIncrement}>Increment Count</button>
          <button onClick={() => setIsVisible(false)} style={{ marginLeft: '10px' }}>
            Hide Component
          </button>
        </div>
      )}      
    </div>
  );
}

export default LifecycleDemo;
