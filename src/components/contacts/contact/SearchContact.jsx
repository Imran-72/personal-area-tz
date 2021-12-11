import React from "react";
import { loadSearchContact } from "../../../redux/reducers/contacts";
import { useDispatch, useSelector } from "react-redux";

function SearchContact() {
  const dispatch = useDispatch();

  const searchContact = useSelector(
    (state) => state.contacts.searchContactValue
  );

  const handleChangeContact = (e) => {
    dispatch(loadSearchContact(e.target.value));
  };

  return (
    <div className="searchContact">
      <input
          placeholder="Поиск по имени"
        value={searchContact}
        onChange={handleChangeContact}
      />
    </div>
  );
}

export default SearchContact;
