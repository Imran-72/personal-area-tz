/** State **/

const initialState = {
  loading: false,
  opened: true,
  contacts: [],
  contactItem: {},
  loadingContact: false,
  openedGetContactItem: false,
  fullName: "",
  telephone: "",
  email: "",
  searchContactValue: "",
};

/** Reducers **/

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case "load/contacts/start":
      return {
        ...state,
        loading: true,
      };

    case "load/contacts/success":
      return {
        ...state,
        loading: false,
        contacts: action.payload,
      };

    case "toggle/modal":
      return {
        ...state,
        opened: !state.opened,
      };

    case "add/contact/start":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case "get/fullName":
      return {
        ...state,
        fullName: action.payload,
      };

    case "get/telephone":
      return {
        ...state,
        telephone: action.payload,
      };

    case "get/email":
      return {
        ...state,
        email: action.payload,
      };

    case "search_contact":
      return {
        ...state,
        searchContactValue: action.payload,
      };

    case "clear/input":
      return {
        ...state,
        fullName: "",
        telephone: "",
        email: "",
      };

    case "deleting/contact/success":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    case "get/contact/item":
      return {
        ...state,
        contactItem: action.payload,
        openedGetContactItem: !state.openedGetContactItem,
      };

    case "change/contact/success":
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact.id === action.payload.id) {
            return action.payload;
          }
          return contact;
        }),
        openedGetContactItem: false,
      };

    case "close/win":
      return {
        ...state,
        openedGetContactItem: false,
      };

    default:
      return state;
  }
}

/** Thunks **/

export const loadContacts = () => (dispatch) => {
  dispatch({ type: "load/contacts/start" });

  fetch("http://localhost:3010/contacts")
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: "load/contacts/success",
        payload: json,
      });
    });
};

export const addContact = () => (dispatch, getState) => {
  const { fullName, telephone, email } = getState().contacts;

  dispatch({
    type: "add/contact/start",
    payload: { fullName, telephone, email },
  });

  fetch("/contacts", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fullName,
      telephone,
      email,
    }),
  })
    .then((response) => response.json())
    .then(() => {});
  dispatch({
    type: "clear/input",
  });
};

export const deleteContact = (id) => (dispatch) => {
  fetch(`http://localhost:3010/contacts/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(() => {
      dispatch({
        type: "deleting/contact/success",
        payload: id,
      });
    });
};

export const changeContact = (id, fullName, telephone, email) => (dispatch) => {
  fetch(`http://localhost:3010/contacts/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      fullName,
      telephone,
      email,
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: "change/contact/success",
        payload: json,
      });
    });
};

export const getContact = (fullName, telephone, email) => (dispatch) => {
  dispatch({
    type: "get/contact/item",
    payload: fullName,
    telephone,
    email,
  });
};

export function loadSearchContact(inputValue) {
  return { type: "search_contact", payload: inputValue };
}

export function toggleModal() {
  return { type: "toggle/modal" };
}

export function getFullName(fullName) {
  return { type: "get/fullName", payload: fullName };
}

export function getTelephone(telephone) {
  return { type: "get/telephone", payload: telephone };
}

export function getEmail(email) {
  return { type: "get/email", payload: email };
}

export function closeWin() {
  return { type: "close/win" };
}
