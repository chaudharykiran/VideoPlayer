import React from "react";

function Content(props) {
  return (
    <React.Fragment>
      {props.video ? (
        <video src={props.video} type="video/mp4" controls />
      ) : (
        <img src="iphone.jpg" alt='iphone' />
      )}
    </React.Fragment>
  );
}
export default Content;
