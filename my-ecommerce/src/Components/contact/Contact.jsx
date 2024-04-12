import './Contact.css';
import ContactHeader from './ContactHeader';
import ContactForm from './ContactForm';
import ContactMaps from './ContactMaps';
const contact = () => {
  return (
    <div className='contact'>
      <ContactHeader/>
      <ContactForm/>
      <ContactMaps/>
    </div>
  )
}

export default contact
