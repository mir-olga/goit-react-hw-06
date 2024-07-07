/*файл створення стору

{
  contacts: {
		items: []
	},
  filters: {
		name: ""
	}
}*/

import { createStore } from "redux";//створюэмо Store
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';
import { composeWithDevTools } from "@redux-devtools/extension/lib/types/logOnly";


// Початкове значення стану Redux для кореневого редюсера,
// якщо не передати параметр preloadedState.


const initialState = {
    contacts: {
          items: contactsReducer
      },
    filters: {
          name: filtersReducer
      }
  }

// Поки що використовуємо редюсер який
// тільки повертає отриманий стан
const reducer = (state = initialState, action) => { //state = initialState, щоб не було в перший раз undef
  return state;
};

export const store = createStore(reducer, composeWithDevTools());

 /* export const store = configureStore({
    reducer: rootReducer,
  });*/
  
 
  
