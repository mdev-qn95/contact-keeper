import React, { Fragment, useContext, useEffect } from 'react';
import Loading from '../layout/Loading';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from '../contacts/ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact!</h4>;
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered
            ? filtered.map(contact => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map(contact => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Loading />
      )}
    </Fragment>
  );
};

export default Contacts;
