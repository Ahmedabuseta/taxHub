import React, { useEffect, useRef, useState } from 'react'
import './profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

function Profile(){
    var [editMode,setEditMode]=useState(false)
    var [address,setAddress]=useState("mansoura")
    var [email,setEmail]=useState("balqeessaber@gmail.com")
    var [firstname,setFirstname]=useState("balqees")
    var [lastname,setLasttname]=useState("Saber")
    var [mobile,setMobile]=useState("0020 1064569047")
    var [newData,setNewData]=useState([])
    const [image,setImage]=useState(null)
    const imageInput=useRef()
    function imageUpload(){
        imageInput.current.click()
    }
    function imageDisplay(e){
        let file=e.target.files[0]
        setImage(file)
    }
    const handleClick=()=>{
        setEditMode(!editMode)
        if(editMode){
            var x=[image,email,mobile,address,firstname,lastname]
            setNewData(x)
        }
    }
    useEffect(() => {
        console.log(newData);
      }, [newData]); 
    return(
            
    <div className="profile row p-5 ps-md-0 m-3 ">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1"/>
        <div className='col-12 d-flex justify-content-end my-3'>
        <button type="button" class={!editMode?'btn btn-primary':'none'} onClick={()=>setEditMode(true)}>edit profile</button>
        </div>
        <div className="col-sm-12 col-md-4 mb-3">
            <span class="">
                <img src={(image && URL.createObjectURL(image))}  class="rounded-circle bg-white d-block mx-auto img"
                alt="" width="100" height="100" />
                <button className={editMode?"pen d-block":"none"} onClick={imageUpload}>
                    Edit
                <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <input onChange={imageDisplay} type='file' ref={imageInput}  style={{display:"none"}}/>
            </span>
        </div>
        <div className="col-sm-12 col-md-8">
            <div className='row'>
            <div className='col-sm-12 col-md-6 mb-4'>
                <label className='d-block'>First Name</label>
                <input type='text' placeholder='First name' defaultValue={firstname} onChange={(e) => setFirstname(e.target.value)} class={editMode?" profileinput":" profileinput disabled"} disabled={!editMode}></input>
            </div>
            <div className='col-sm-12 col-md-6 mb-4'>
                <label className='d-block'>Last Name</label>
                <input type='text' placeholder='Last name' defaultValue={lastname} onChange={(e) => setLasttname(e.target.value)} class={editMode?" profileinput":" profileinput disabled"} disabled={!editMode}></input>
            </div>
            <div className='col-sm-12 col-md-6 mb-4'>
                <label className='d-block'>Phone Number</label>
                <input type='text' placeholder='Phone Number' defaultValue={mobile} onChange={(e) => setMobile(e.target.value)} class={editMode?" profileinput":" profileinput disabled"} disabled={!editMode}></input>
            </div>
            <div className='col-sm-12 col-md-6 mb-4'>
                <label className='d-block' >Address</label>
                <input type='text' placeholder='Address' defaultValue={address} onChange={(e) => setAddress(e.target.value)} class={editMode?" profileinput":" profileinput disabled"} disabled={!editMode}></input>
            </div>
            <div className='mb-4'>
            <label className='d-block'>Email</label>
            <input type='email' placeholder='Email' defaultValue={email} onChange={(e) => setEmail(e.target.value)} class={editMode?" profileinput":" profileinput disabled"} disabled={!editMode}></input>
            </div>
            <div className={editMode?'':'none'}>
            <button type="reset" class="btn btn-outline-primary col-md-3 ">Cancel</button>
            <button type="submit" class="btn btn-primary col-md-3 mx-3" onClick={handleClick}>Save</button>
            </div>
            </div>
            
        </div>
        
    </div>
    )
}
export default Profile;