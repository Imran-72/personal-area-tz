import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "./contact/Contact";
import AddContactButton from "./contact/AddContactButton";
import GetContactItem from "./contact/GetContactItem";
import SearchContact from "./contact/SearchContact";
import { loadContacts } from "../../redux/reducers/contacts";
import Logout from "./contact/Logout";

function Contacts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);

  const contacts = useSelector((state) => {
    const searchContactValue = state.contacts.searchContactValue;

    return state.contacts.contacts.filter((contact) => {
      return (
        contact.fullName
          .toUpperCase()
          .indexOf(searchContactValue.toUpperCase()) !== -1
      );
    });
  });

  const loading = useSelector((state) => state.contacts.loading);

  const openedGetContactItem = useSelector(
    (state) => state.contacts.openedGetContactItem
  );



  return (
    <div className="cont">
      {loading ? (
        "Идёт загрузка..."
      ) : (
        <>
          {openedGetContactItem && <GetContactItem />}
          <SearchContact />
          <Logout />
          <div className="contacts">
            <div className="list-contacts">Мои контакты</div>
            <div className="add-contact">
              <AddContactButton />
            </div>
            <div className="items-contacts">
              {contacts.map((contact, index) => {
                return <Contact key={index} contact={contact} />;
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Contacts;
