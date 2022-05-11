/** 
@function
@param {Object} props
@returns {JSX.Element}
*/
import React from "react";
import PropTypes from 'prop-types'
export default function Congrats({ success }) {
  return (<div data-test="component-congrats">
  {success?<span>Congrats you have guessed the word</span>:''}
  </div>);
}
Congrats.propTypes={
    success:PropTypes.bool.isRequired
}