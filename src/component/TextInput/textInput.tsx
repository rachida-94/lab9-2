import React from "react";
import {type TextInputProps } from "../../types";

export const TextInput:React.FC<TextInputProps>=({
    onTextChange,
    placeholder='Start typing...',
    initialValue=''
}) =>{
    return (
        <div >
            
        <textarea
         className="w-full min-h-[100px] p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none
         focus:ring-2 focus:ring-blue-500 resize-none text-gray-800 mb-2"

         placeholder={placeholder}
        defaultValue={initialValue}
        onChange={(e)=> onTextChange(e.target.value)}
        rows ={6} ize-none/>
    </div>
    )
    
}