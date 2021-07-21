import React, { useState } from "react";
function App() {
  return (
    <div>
      <Folder name='Desktop'>
        <Folder name='Music' />
        <Folder name='Pictures'>
          <File name='photo.jpg' />
        </Folder>
      </Folder>
      <Folder name='Downloads'>
        <Folder name='Setups' />
        <File name='sheet.xls' />
        <File name='song.mp4' />
      </Folder>
    </div>
  );
}

const Folder = ({ name, children }) => {
  const [isOpen, setisOpen] = useState(false);
  const direction = isOpen ? "down" : "right";
  const handleClick = () => {
    setisOpen(!isOpen);
  };

  return (
    <div style={{ margin: "1px 0px 0px 10px" }}>
      <span onClick={handleClick}>
        <i className='bi bi-folder-fill'></i>
        <i class={`bi bi-chevron-${direction}`}></i>
      </span>
      {name}
      <div style={{ marginLeft: "10px" }}>{isOpen ? children : null}</div>
    </div>
  );
};

const File = ({ name }) => {
  const fileExtension = name.split(".")[1];
  const fileIcon = {
    mp4: "bi-file-earmark-music",
    jpg: "bi-file-earmark-play-fill",
    xls: "bi-file-earmark-spreadsheet-fill",
  };
  return (
    <div
      className={`bi ${fileIcon[fileExtension]}`}
      style={{ marginLeft: "10px" }}
    >
      {name}
    </div>
  );
};

export default App;
