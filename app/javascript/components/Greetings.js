import React from "react"
import { createStructuredSelector} from "reselect"
import { connect } from "react-redux"
const GET_THINGS_REQUEST = "GET_THINGS_REQUEST"

function getGreetings() {
  return dispatch => {
    dispatch({
    type: GET_THINGS_REQUEST
  })
  return fetch("v1/greetings.json")
  .then(response => response.json())
  .then(json => dispatch(getGreetingsSuccess(json)))
  .catch(error => console.log(error));
}
}

export function getGreetingsSuccess(json) {
  return {
    type: "GET_GREETINGS_SUCCESS",
    json
  }
}

class Greetings extends React.Component {
  render () {
    const { greetings } = this.props;
    const greetingList = [greetings].map((greeting) => {
      return <li key={greeting.id} >{greeting.text}</li>
    });


   return(
      <React.Fragment>
        <h1>Hello in Five Languages 😃 </h1>

        <button onClick={() => this.props.getGreetings()}>Get Greetings</button>
        <ul>{greetingList}</ul>
      </React.Fragment>
    );
  }
}


const structuredSelector = createStructuredSelector({
  greetings: state => state.greetings,
})

const mapDispatchToProps = { getGreetings }
export default connect(structuredSelector, mapDispatchToProps)(Greetings)
