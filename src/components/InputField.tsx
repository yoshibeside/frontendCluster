import React, { useRef } from "react";
import "./styles.css";
import axios from "axios";
import { ENDPOINT } from "../App";
import { useState } from "react";


function InputFeild (){
    let formData = new FormData()
    const inputRef = useRef<HTMLInputElement>(null);
    const inputRef2 = useRef<HTMLInputElement>(null);  
    const [rendering, setRendering] = useState<boolean>(false)

    const onFileChange = (e: React.ChangeEvent) => {
      const target = e.target as HTMLInputElement
      if (!target.files) return;
      console.log(target.files[0])
      if (e.target && target.files[0]) {
        formData.set('file', target.files[0]);
      }
    }
  
    const SubmitFileDate = async (event: React.FormEvent, cluster: React.RefObject<HTMLInputElement>) => {
      event.preventDefault();
      await axios.request({
        method: "post",
        url: `${ENDPOINT}/api/${cluster.current?.value}/data`,
        data: formData,
      })
      .then(res => {
        console.log(res)
        window.location.reload()
        // Dimasukkan ke dalam array dari frontendnya. Ngga usah manggil dari database.
        // Pertama kali launch aplikasinya, ambil dari database.
      })
      .catch(error => {
        console.log(error.response.data)
        alert("either file wrong input or amount of cluster")
      })
    }


  return (
    <form
      className="input"
      onSubmit={(e) => {
        SubmitFileDate(e,inputRef2);
      }}
    >
      <input
        type="file"
        placeholder="Enter a Todo"
        ref={inputRef}
        onChange={(e) => onFileChange(e)}
        className="input__box"
        accept="xlsx"
      />
      <input
        type="text"
        placeholder = "Enter amount of Clusters"
        ref = {inputRef2}
        className = "input__box"
        />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  );
};

export default InputFeild;