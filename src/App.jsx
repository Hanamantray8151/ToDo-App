import React, { useState } from 'react';
import ToDoLists from './ToDoLists';

const App = () => {

  const [inputEvent,setInputEvent] = useState("");
  const [Items,setItems] = useState([]);

  function handleChange(event) {
    setInputEvent(event.target.value);
  }

  function insertItems(){
    setItems( (oldItems) => {
      return [...oldItems,inputEvent];
    });
    setInputEvent("");
  }

  function deleteItems(id){
    setItems( (oldItems) => {
      return oldItems.filter( (arrElement,index) => {
        return index !== id; //Which returns array elements in which both index and id are not equal.
      })
    })
  }

  return (
    <>
      <div className='main-div'>
        <div className='center-div'>
          <br/>
          <h1>ToDo List</h1>
          <br/>
          <input onChange={handleChange} value={inputEvent} type="text" placeholder="Add Items"/>
          <button onClick={insertItems}>+</button>
          <ol>
            {Items.map( (itemVal, index) => {
              return(
                <ToDoLists
                  text = {itemVal}
                  id = {index}
                  key = {index}
                  onSelect = {deleteItems}
                />
              )
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default App;