import Authorization from "./components/Authorization";
import Contacts from "./components/Contacts";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import AddContactButton from "./components/Contacts/Contact/AddContactButton";
import AddContactWindow from "./components/Contacts/Contact/AddContactWindow";
import GetContactItem from "./components/Contacts/Contact/GetContactItem";
import SearchContact from "./components/Contacts/Contact/SearchContact";

function App() {
  const authorizing = useSelector((state) => state.authorization.authorizing);

  return (
    <BrowserRouter>
      <Route path="/contacts" component={Contacts} />
      <Route path="/authorization" component={Authorization} />
      <Route path="/addContactButton" component={AddContactButton} />
      <Route path="/addContactWindow" component={AddContactWindow} />
      <Route path="/getContactItem" component={GetContactItem} />
      <Route path="/searchContact" component={SearchContact} />
      {authorizing ? (
        <Redirect to="/contacts" />
      ) : (
        <>
          <Redirect to="/authorization" />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
