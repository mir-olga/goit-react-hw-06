import { Contact} from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = ({items, onDelete}) => {
    return (
        <ul className={css.contactsDiv}>
        {items.map(item => (
          <li key={item.id} >
             <Contact item={item} onDelete={onDelete}/>
          </li>
        ))}
      </ul>
       
    )
}