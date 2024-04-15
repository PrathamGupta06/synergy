import React, { useState, useEffect } from 'react';
import fetchBoardProgress from '@/lib/api';

function ProgressBar(){
  const [progress, setProgress] = useState<any>(0);
  
  useEffect(()=>{
    setInterval(() => {
      fetchBoardProgress()
      .then(progress => {
        if (progress !== null) {
            console.log('Progress:', progress);
            setProgress(progress);
            
        } else {
            console.log('Failed to fetch progress.');
        }
      })
      .catch(err => console.error(err));
    }
    , 2000);
  },[]);
  
  return (
    <div>
      <div style={{ width: '100%', backgroundColor: '#ccc' }}>
        <div style={{ width: `${progress}%`, height: '20px', backgroundColor: '#9C49FF' ,marginTop : '20px' }} />
        
        {/* <input type='range' value={progress}/> */}
      </div>
      
    </div>
  );
};

export default ProgressBar;