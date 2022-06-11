import { useState, useEffect } from 'react';
import './App.css';
import data from './todo.json';
import Todo from './components/Todo';

const App = () => {

  const [display, setDisplay] = useState([]);
  const [valuea, setValuea] = useState();

  useEffect(() => {
    setTimeout(() => { setDisplay(data) }, 5000)
  }, [])

  const addData = () => {
    let lastIndex = display.length;
    setDisplay((prevalue) => {
      return [{
        id: lastIndex + 1,
        name: valuea,
        status: 0
      }, ...prevalue]
    });
    setValuea('');
  }

  const statuschange = (id) => {
    let updateArray = display.filter((todo) => {
      return todo.id === id
    })[0]
    updateArray['status'] = updateArray['status'] == 1 ? 0 : 1;
    let updateArrayfiltered = display.filter((todo) => {
      return todo.id !== id
    })
    console.log(updateArray);
    setDisplay([...updateArrayfiltered, updateArray])
  }
  if (display.length > 0) {
    return (
      <div className="App">
        <p>
          <h1 className="app__todo">Hello React TODO</h1>
          <input type="text" id="txtValA" value={valuea} onChange={(e) => setValuea(e.target.value)} />
          <button id="btnCalculate" type="button" onClick={addData}>Add</button>
          <div className="display" id="divDisplay">{
            display.map((todo) => {
              return (
                <Todo todo={todo} statuschange={statuschange} />
              )
            })
          }</div>
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <h4 style={{ textAlign: 'center' }}>Loading...</h4>
      </div>
    )
  }
}

export default App;
