import React from "react";

const FormBlockInput = (props) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={props.id}>
                {props.label}
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={props.id}
                name={props.name}
                placeholder={props.placeholder}
            />
        </div>
    );
}

export default FormBlockInput