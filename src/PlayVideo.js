import React from "react";

import Content from "./Component/Content/content";

function PlayVideo(props) {
  return (
    <div>
      <figure className="iphone">
        <div className="side-buttons">
          <div />
        </div>
        <div className="phone">
          <div className="top">
            <div>
              <span className="camera" />
              <span className="speaker" />
            </div>
          </div>

          <div className="screen">
            <Content video={props.video} />
          </div>

          <div className="bottom">
            <div />
          </div>
        </div>
      </figure>
    </div>
  );
}

export default PlayVideo;
