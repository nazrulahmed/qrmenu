import { useState, useEffect } from 'react';

export function Spinner(){

    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setShowSpinner(false);
        }, 500); // 0.5 seconds
    
        return () => clearTimeout(timer);
      }, []);
    return (
        <>
       {showSpinner? <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>:null}
        </>
    );
}