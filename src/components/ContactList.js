import React from "react";
import styled from "styled-components";

const StyledContactList = styled.div`
  margin: 1rem 0;
  div {
    display: flex;
    justify-content: flex-end;
    button {
      color: white;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: #3a3d52;
    border-radius: 3px;

    li {
      border-bottom: 1px solid #2f3142;
      padding: 0.5rem;
      font-weight: bold;
    }
  }
`;

const ContactList = ({
  contacts,
  setSelectedContact,
  toggleFavourites,
  showFavourites
}) => {
  return (
    <StyledContactList>
      <div>
        <button onClick={toggleFavourites}>
          {showFavourites ? "Show all" : "Show favourites"}
        </button>
      </div>
      <ul>
        {contacts.map(contact => (
          <li key={contact.email} onClick={() => setSelectedContact(contact)}>
            {contact.name}
          </li>
        ))}
      </ul>
    </StyledContactList>
  );
};

export default ContactList;
