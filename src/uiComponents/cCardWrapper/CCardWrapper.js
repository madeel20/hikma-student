import React from 'react';

function CCardWrapper({className = '', children}) {
    return (
        <div className={`c-card-wrapper ${className}`}>
            {children}
        </div>
    );
}
export default CCardWrapper;
