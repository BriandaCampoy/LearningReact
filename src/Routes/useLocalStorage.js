import React from 'react';

function useLocalStorage(itemName, initialValue) {

const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}))
const {
  sincronizedItem,
  error,
  loading,
  item
} = state;

  // const [sincronizedItem, setSincronizedItem] = React.useState(true);
  // const [error, setError] = React.useState(false);
  // const [loading, setLoading] = React.useState(true);
  // const [item, setItem] = React.useState(initialValue);
  //ACTION CREATORS
  const onError=(error)=> { dispatch({type: actionTypes.error, payload:error})}
  const onSuccess=(parsedItem)=> { dispatch({type: actionTypes.success, payload:parsedItem })}
  const onSave=(newItem)=> { dispatch({type:actionTypes.save, payload:newItem})}
  const onSincronize=()=> { dispatch({type:actionTypes.sincronize})}


  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        onSuccess(parsedItem)
        // setItem(parsedItem);
        // setLoading(false);
        // setSincronizedItem(true);
      } catch(error) {
        // dispatch({type: actionTypes.error, payload:error})
        onError(error);
      }
    }, 500);
  }, [sincronizedItem]);
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
      // setItem(newItem);
    } catch(error) {
      // dispatch({type: actionTypes.error, payload:error})
      onError(error);
    }
  };

  const sincronizeItem = () => {
    onSincronize();
    // setLoading(true);
    // setSincronizedItem(false);
  };

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  };
}

const initialState = ({initialValue})=> ({
  sincronizedItem: true,
  error: false,
  loading: true,
  item: initialValue,
})

const actionTypes={
  error:'ERROR',
  success:'SUCCESS',
  save:'SAVE',
  sincronize:'SINCRONIZE'
}

const reducerObject =(state, payload)=>({
  [actionTypes.error]:{
    ...state,
    error : true,
  },
  [actionTypes.success]:{
    ...state,
    error : false,
    sincronizedItem:true,
    loading : false,
    item : payload
  },
  [actionTypes.save]:{
    ...state,
    item: payload
  },
  [actionTypes.sincronize]:{
    ...state,
    loading : true,
    sincronizedItem:false
  }
})

const reducer = (state, action)=>{
  return reducerObject(state, action.payload)[action.type] || state;
}

export { useLocalStorage };