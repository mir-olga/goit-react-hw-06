import { FaUserAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from './Contact.module.css';

export const Contact = ({item, onDelete}) => {
    return (
        <div className={css.contact}>
            <div className={css.info}>
                <p className={css.name}><FaUserAlt />  {item.name}</p>
                <p className={css.name}> <BsFillTelephoneFill/>  {item.number}</p>
            </div>
            <div>
                <button className={css.button} onClick={() => onDelete(item.id)}>Delete</button>
             </div>
        </div>
    )
}