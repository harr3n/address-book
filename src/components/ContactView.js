import React from "react";
import styled from "styled-components";
import { ReactComponent as Star } from "../icons/star.svg";
import { ReactComponent as StarBorder } from "../icons/star_border.svg";
import { ReactComponent as Close } from "../icons/close.svg";

const StyledContactView = styled.div`
  background-color: #4e536f;
  margin: 0 -1rem;
  padding: 0 0.5rem;
  height: 100vh;
  border-radius: 3px;

  .cardHeader {
    display: flex;
    h2 {
      flex: 1;
      font-size: 1rem;
      margin: 0.5rem 0;
    }
  }
`;

const ContactView = ({ contact, setFavourite, close }) => {
  return (
    <StyledContactView>
      <div className="cardHeader">
        <h2>
          {contact.name}
          {contact.favourite ? (
            <Star onClick={() => setFavourite(contact.name)} />
          ) : (
            <StarBorder onClick={() => setFavourite(contact.name)} />
          )}
        </h2>
        <button onClick={close}>
          <Close />
        </button>
      </div>

      <p>{contact.email}</p>
    </StyledContactView>
  );
};

export default ContactView;
