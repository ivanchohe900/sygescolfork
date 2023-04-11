import React from "react";

const Uplaod = () => {
  return (
    <>
      <div>
        <div className="upload-btn-wrapper ">
          <button title="Cargar un Archivo" className="btn">
            +
          </button>
          <input title="Cargar un Archivo" type="file" name="myfile" />
        </div>
      </div>

      <style jsx>
        {`
          .upload-btn-wrapper {
            position: relative;
            overflow: hidden;
            display: inline-block;
            margin: 0 auto;
          }

          .btn {
            border: 1px solid skyblue;
            color: white;
            background-color: white;
            padding: 3px 25px;
            border-radius: 8px;
            font-size: 20px;
            font-weight: bold;
            background-color: dodgerblue;
          }

          .upload-btn-wrapper input[type="file"] {
            font-size: 100px;
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;
          }
        `}
      </style>
    </>
  );
};

export default Uplaod;
