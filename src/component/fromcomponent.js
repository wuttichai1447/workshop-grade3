import './Fromcomponent.css'
import {useState} from "react"
const FromComponent=()=>{
  
    //  สร้าง state
       const [userName,setUsername] = useState('')
       const [email,setEmail] = useState('')
       const [password,setpassword] = useState('')
       const [repassword,setRePassword] = useState('')
       const[erroruserName,setErrorUserName] = useState('')
       const[erroruEmail,setErrorEmail] = useState('')
       const[errorPassword,setErrorPassword] = useState('')
       const[errorRePassword,setErrorRePassword] = useState(' ')
       const[userNameColor,setuserNameColor] = useState('')
       const[emailColor,setemailColor] = useState('')
       const[passwordColor,setpasswordColor] = useState('')
       const[repasswordColor,setRePasswordColor] = useState('')
       const[text, setText] = useState('')


       // สร้าง state ของ color
       const validateForm = (e)=>{
       e.preventDefault()
       let grade,score
       score = parseInt(userName);
       
    
       if (score >= 80 && score <= 100) {
          grade = "A";
        } else if (score >= 70 && score <= 79) {
          grade = "B";
        } else if (score >= 60 && score <= 69) {
          grade = "C";
        } else if (score >= 50 && score <= 59) {
          grade = "D";
        } else {
          grade = "F";
        }
        setText(grade)
       

             //Output of Input Example
             console.log(grade)

       }

//  สร้าง state Error
    console.log(userName)
       return (
        <div className="Container">
           <form className="from" onSubmit={validateForm}>
            <h2>แบบฟอร์มตรวจสอบผลการเรียน</h2>
            <div className="from-control">
                <label>คะแนน</label>
                <input type="text" value={userName} onChange={(e)=>setUsername(e.target.value)} style={{borderColor:userNameColor}}/>
                <small style={{color:userNameColor}}>{erroruserName} {text}</small>
                
            </div>
            
            <button type="Submit">ลงทะเบียน</button>
           </form>

        </div>
    )

    
}



export default FromComponent