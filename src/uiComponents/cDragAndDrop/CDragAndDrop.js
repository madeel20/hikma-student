import React, {useCallback} from "react";
import {useDropzone} from "react-dropzone";

function CDragAndDrop({className = '', callBack}) {
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            // const reader = new FileReader()
            callBack(file)
            // reader.onabort = () => console.log('file reading was aborted')
            // reader.onerror = () => console.log('file reading has failed')
            // reader.onload = () => {
            // Do whatever you want with the file contents
            // const binaryStr = reader.result
            // console.log(binaryStr)
            // }
            // reader.readAsArrayBuffer(file)
        })

    }, []);
    const {getRootProps, getInputProps} = useDropzone({onDrop})

    return (
        <div {...getRootProps()} className={`upload-with-drag ${className}`}>
            <input {...getInputProps()} />
            <img src={require('../../assets/svgs/files-upload.svg')} alt=""/>
            <p className="title"><span>Choose a file</span> or drag here</p>
            <p className="types">
                Only pdf, doc, docx, xls, zip, png, jpeg files type
            </p>
        </div>
    )
}

export default CDragAndDrop;
