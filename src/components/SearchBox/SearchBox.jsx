import css from './SearchBox.module.css';

export const SearchBox = ({ nameFilter, onChange }) => {

return (
        <div className={css.searchBox}>
            <p>Name</p>
            <input className={css.input}
              type="text" name="username"
            value={nameFilter}
            onChange={evt => onChange(evt.target.value)}
            />
        </div>
);
}


  