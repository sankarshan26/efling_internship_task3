import React, { useRef } from "react";
import "../../CSS/Settings/BackupSettings.css";




function BackupSettings() {

    const hiddenFileInput = useRef(null);

    const click_handler = (event) => {
      hiddenFileInput.current.click();
    };
    const handleChange = (event) => {
      const fileUploaded = event.target.files[0];
    };


  return (
    <div className="flex flex-col px-3">

      <div className="top-heading mt-6 mb-2">Upload From Local Directory</div>
      <div className="upload_file_content flex flex-col">

        <div className="flex flex-col justify-center gap-2 sm:gap-0 sm:flex-row sm:justify-between items-center  border border-black px-4 py-2 rounded-xl">
          <div className="box mt-0 flex justify-between items-center border border-black rounded-2xl gap-8">
            {" "}
            <span>Attach File *</span>
            <button onClick={click_handler} className="browse-btn">
              BROWSE
            </button>
          </div>
          <input
            type="file"
            style={{ display: "none" }}
            ref={hiddenFileInput}
            onChange={handleChange}
          />

<div className="text-center">
          {" "}
          <button className="save-file-btn" style={{"color":"white"}}>Update File</button>
        </div>
        </div>
      </div>

      <div className="top-heading mb-2 mt-6">Database Backup List</div>
      <div className="border border-black rounded-xl flex justify-center flex-col p-2">
        {/* <div className="heading w-full " style={{"color":"black", "font-weight":"800"}}>System Info</div> */}
        
        <ul className="w-full mt-2 flex flex-col gap-3 sm:px-4">
        <li className="flex w-full justify-between" >
          <span className="inline ">Size</span>
          <span className="inline y">CREATED&nbsp;DATE&nbsp;TIME</span>
          <span className="inline ">BACKUP&nbsp;FILES</span>
          <span className="inline y">FILE&nbsp;TYPE</span>
          <span className="inline ">ACTION</span>
        </li>
        
      </ul>
      </div>
      
    </div>
  )
}

export default BackupSettings
