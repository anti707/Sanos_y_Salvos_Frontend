import React from "react";
import Input from "../atoms/Input";
import Error from "../atoms/ErrorMessage";

function DynamicInputs({ inputs = [], className = "" }) {
  return (
    <>
      {inputs.map((input, index) => (
        <div key={input.name || index} className={className}>
          <Input type={input.type || "text"}
            placeholder={input.placeholder}
            name={input.name}
            value={input.value}
            onChange={input.onChange}
            required={input.required}
            autoComplete={input.autoComplete}
            disabled={input.disabled}
            className={input.className}
          />
            <Error message={input.error} />
        </div>
      ))}
    </>
  );
}

export default DynamicInputs;