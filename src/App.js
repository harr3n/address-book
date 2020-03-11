import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import getContacts from "./contacts";
import ContactList from "./components/ContactList";
import ContactView from "./components/ContactView";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto');
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
    background-color: #2f3142;
    color: #fff;
    font-size: 16px;
  }
`;

const StyledApp = styled.div`
  margin: 2rem;
`;

const StyledHeader = styled.header`
  margin-bottom: 1rem;
  input {
    width: 100%;
    height: 2rem;
    padding: 0.5rem;
    background-color: #3a3d52;
    color: #aaa;
    border: none;
    border-radius: 3px;
    appearance: none;
  }
`;

function App() {
  const [contacts, setContacts] = useState(getContacts());
  const [searchQuery, setSearchQuery] = useState("");
  const [showFavourites, setShowFavourites] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const filteredContacts = contacts.filter(contact => {
    if (showFavourites) {
      return (
        (contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          contact.email.toLowerCase().includes(searchQuery.toLowerCase())) &&
        contact.favourite
      );
    } else {
      return (
        contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  });

  const setFavourite = name => {
    let newContacts = [...contacts];
    const index = newContacts.findIndex(contact => contact.name === name);
    newContacts[index].favourite = !newContacts[index].favourite ? true : false;

    setContacts(newContacts);
  };

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <StyledHeader>
          <h1>Contacts</h1>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </StyledHeader>
        <main>
          {selectedContact ? (
            <ContactView
              contact={selectedContact}
              setFavourite={setFavourite}
              close={() => setSelectedContact(null)}
            />
          ) : (
            <ContactList
              contacts={filteredContacts}
              setSelectedContact={setSelectedContact}
              toggleFavourites={() => setShowFavourites(!showFavourites)}
              showFavourites={showFavourites}
            />
          )}
        </main>
      </StyledApp>
    </>
  );
}

export default App;
