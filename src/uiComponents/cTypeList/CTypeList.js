import React from "react";
import {CTags} from "../index";
import {MappedElement} from "../../utils/helper";

const CTypeList = ({data, onClick}) => {
    if(data && data.length){
        return (
            <ul className="m-0 p-0 c-type-list">
                <MappedElement
                    data={data}
                    renderElement={(obj, index) => {
                        return (
                            <li key={index}
                                className="d-flex flex-row align-items-center c-type-list-item"
                                onClick={onClick}>
                                <img src={obj.imageUrl} alt={obj.name} draggable={false}/>
                                <div className="flex-1 c-type-list-item-info">
                                    <h6>{obj.name} {obj.students ? <span> . {obj.students}</span> : ''}</h6>
                                    <CTags data={obj.tags}/>
                                </div>
                            </li>
                        )
                    }}
                />
            </ul>
        )
    }
    return null
};

export default CTypeList;
