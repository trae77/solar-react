import React from "react";


// This file exports the Input and TextArea, for user input.
function Calculator(){
 function Input(address) {
  return (
    <div className="form-group">
      <input className="form-control" {...address} />
    </div>
  );
}

 function TextArea(address) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...address} />
    </div>
  );
}
}
export default Calculator;


