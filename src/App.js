
import './App.css'
import FocusInput from './moreComponents/FocusInput';
//import RefsDemo from './moreComponents/RefsDemo';
//import ParentComp from './moreComponents/ParentComp';
//import PureComp from './moreComponents/PureComp';

//import FragmentDemo from './moreComponents/FragmentDemo';
//import Table from './moreComponents/Table';
//import LifeCycleA from './moreComponents/LifeCycleA';
//import Form from './moreComponents/Form';
const App=()=> {

  return (
    <div className="App">
      <FocusInput/>
      {/*<RefsDemo/>*/}
     {/*<ParentComp/>*/}
    {/* <PureComp/>*/}
 {/*<LifeCycleA/>*/}
     {/* <Form/>*/}
    {/*<FragmentDemo/>*/}
   {/* <Table/>*/}
    </div>
  );
}
//Pure components work with class based components only and not functional based components
export default App;
//LifeCycle methods are classified into
//mounting=>when an instance of a component is being created and inserted into the DOM
//updating=>when a component is being re-rendered as a result of changed to either its props or state
//unmounting=>when a component is being removed from the DOM
//errorhandling=>When there is an error during rendering, in a lifecycle method, or in the constructor of any child component
//Each Lifecycle has its own methods 
//Using Refs to focus input, there are two methods,using this.createRef and using callback Ref and assigning it value null