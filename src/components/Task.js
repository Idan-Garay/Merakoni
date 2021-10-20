import './App.css';

function App() {
  return (
    <div className="App">
      <div id="Search">
        <h1>To Do List</h1>
        <input type="text" placeholder="Enter task"></input>
        <span class="Add">Add</span>
      </div>

      <ul id="List">
        <li><input type="checkbox" class="check"></input>Buy Groceries<span class="close">&times;</span></li>
        <li><input type="checkbox" class="check"></input>Study for Midterm Exam<span class="close">&times;</span></li>
        <li><input type="checkbox" class="check"></input>Pass Assignment<span class="close">&times;</span></li>
        <li><input type="checkbox" class="check"></input>Make Pancakes<span class="close">&times;</span></li>
        <li><input type="checkbox" class="check"></input>Fix bag<span class="close">&times;</span></li>
      </ul>
    </div>
  );
}

export default App;
