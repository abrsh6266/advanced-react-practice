import React from "react";
import { data, people } from "../../../data";
import { useState } from "react";
import { useReducer } from "react";

const defaultState = {
  people: people,
  isLoading: false,
};
const reducer = (state, action) => {
  console.log(action)
  if (action.type === "CLEAR_LIST"){
    return {...state,people:[]}
  }
};
const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {};
  const clearList = () => {
    dispatch({ type: "CLEAR_LIST" });
  };
  const resetList = () => {};

  console.log(state);
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={() => {
            clearList();
          }}
        >
          clear items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={() => {
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
