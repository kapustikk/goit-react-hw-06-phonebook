import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList.js';
import Filter from './components/Filter/Filter';
import Container from './components/Container/Container';

function App() {
  return (
    <Container>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Container>
  );
}

export default App;
