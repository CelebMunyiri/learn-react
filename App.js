
import './App.css';
import Form from './moreComponents/Form';
const App=()=> {

  return (
    <div className="App">
 
      <Form/>
    </div>
  );
}

export default App;
//LifeCycle methods are classified into
//mounting=>when an instance of a component is being created and inserted into the DOM
//updating=>when a component is being re-rendered as a result of changed to either its props or state
//unmounting=>when a component is being removed from the DOM
//errorhandling=>When there is an error during rendering, in a lifecycle method, or in the constructor of any child component
//Each Lifecycle has its own methods 