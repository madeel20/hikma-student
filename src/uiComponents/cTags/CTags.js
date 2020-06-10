import React from "react";

const CTags = ({data}) => {
    if(data && data.length){
        return <div className="c-tags d-flex flex-wrap">
            {data.map((tag, index) =>{
                return(
                    <span className={`c-tag ${tag.toLowerCase()}`} key={index}>{tag}</span>
                )
            })}
        </div>
    }
    return null;
};
export default CTags;
