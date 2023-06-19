import React from 'react'
import styles from '../../styles/styles'
import { useState } from 'react'
import './uploader.css'

import { IoMdCloudUpload, IoMdTrash } from 'react-icons/io'
import { AiFillFileImage } from 'react-icons/ai'
const Uploader = () => {
  const [image, setImage] = useState(null)
  const [fileName,setFileName] = useState("No Selected File")
  return (
     <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1 className="text-[var(--text-dark)]">Upload Your Design</h1>
        </div>
        <form action=""
        onClick={()=> document.querySelector(".input-field").click()}
        >
          <input type="file" accept='image/*' className='input-field' hidden 
          onChange={({target : {files}})=> {
            files[0] && setFileName(files[0].name)
            if(files){
              setImage(URL.createObjectURL(files[0]))
            }
          }}
          />
          {image ?
          <img src={image} width={250} height={250} alt={fileName}/>
          : 
          <>
          <IoMdCloudUpload color='#1475cf' size={60}/>
          <p color='#ffffff'>Browse files to Upload</p>
          </>
        }

        </form>
        <section className='uploaded-row'>
          <AiFillFileImage color='#1475cf' />
          <span className='upload-content'>
            {fileName}
            <IoMdTrash 
            onClick={()=>{
              setFileName("No file selected")
              setImage(null)
            }}
            />
          </span>
        </section>

        </div>
  )
}

export default Uploader
