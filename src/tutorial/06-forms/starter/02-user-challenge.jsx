import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [people, setPeople] = useState(data);
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const fakeId = Date.now();
    const newUser = { name: name, id: fakeId };
    setPeople([...people, newUser]);

    setName("");
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            className="form-input"
            id="name"
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h2>Users</h2>
      {
        /* render users below */
        people.map((p) => {
          return (
            <div key={p.id}>
              <h4>{p.name}</h4>
            </div>
          );
        })
      }
    </div>
  );
};
export default UserChallenge;
