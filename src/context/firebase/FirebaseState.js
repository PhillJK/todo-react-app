import React, { useReducer } from "react";
import axios from "axios";
import FirebaseContext from "./firebaseContext";
import FirebaseReducer from "./firebaseReducer";
import { SHOW_LOADER } from "../types";

const url = process.env.REACT_APP_DB_URL;

const FirebaseState = ({ children }) => {
  const initialState = {
    notes: [],
    loading: false
  };
  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  const showLoader = () => dispatch({ type: SHOW_LOADER });

  const fetchNotes = async () => {
    const res = await axios.get(`${url}/notes.json`);
  };

  return <FirebaseContext.Provider>{children}</FirebaseContext.Provider>;
};

export default FirebaseState;
