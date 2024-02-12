import { useState } from "react";
const frameworks = ["react", "angular", "vue", "svelte"];
const OtherInputs = () => {
  const [isShipped, setShipped] = useState(false);
  const handleForm = ()=>{
    
  }
  return (
    <div>
      <form className="form" onSubmit={handleForm}>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping"> Free Shipping </label>
          <input type="checkbox" onClick={()=>{
            setShipped(!isShipped)
          }} checked={isShipped} id="shipping" name="shipping"/>
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
