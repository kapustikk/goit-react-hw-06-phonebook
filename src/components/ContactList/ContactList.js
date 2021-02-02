import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import * as contactActions from '../../redux/phonebook-actions';
import { getFilteredContacts } from '../../redux/phonebook-selectors';
import s from '../ContactList/ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(contactActions.deleteContact(id));

  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.allContacts}>
          <p>
            {name}: {number}
          </p>
          <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//       }),
//     ),
//     onDeleteContact: PropTypes.func.isRequired,
//   };
