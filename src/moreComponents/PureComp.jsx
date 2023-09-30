import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log('***Pure Comp render***')
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
}
//Implements shouldComponentUpdate with a shallow prop and state comparison
//SC of prevSate with currentSate ,if there is difference it re-renders
//SC of prevProps with currentProps, if there is difference it re-renders

//WHY TO USE PURE COMPONENTS
//Prevent unncecesary re-renders, gives a performance boost

//NB/ You should not mutate object or arrays in props or state
export default PureComp
