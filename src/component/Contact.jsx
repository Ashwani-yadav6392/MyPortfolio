import React from 'react'


const Contact = () => {
  // const [signupUsers,setSignupUser] = useState({
  //   firstname:"",
  //   lastname:"",
  //   email:"",
  //   subject:"",
  //   meassage:"",

  // })

  // const handleChange = (e)=>{
  //   let {name,value}=e.target;
  //   setSignup({ ...signupUsers,[name]: value})
  // };

  
  

  return (
         <div>
         <section className='h-screen  w-screen text-white   flex flex-col-2 '>
        {/* left side */}
        <div className='h-[50%] w-[40%] ml-25 mt-35 ' >
           <h3><spsn className="text-yellow-300">|</spsn> CONTACT</h3>
           <h1 className='text-2xl text-start'>Let’s build something great together. Whether it’s a project</h1>
           <p className='text-2xl mt-5'>For collaborations, freelance work or inquiries, please contact me via email or LinkedIn.</p>
        </div>
        
       {/* right side */}
       <div className='h-[50%] w-[50%]'>
        <form className=' bg-white mt-20  ml-5 text-black rounded'>
          {/* <h1 className='text-center'>Contact <span>Me</span></h1>   */}
          <label>FirstName</label>
           <br /> 
          <input  name='firstname'  className='bg-blue-100 w-[450px] h-8 rounded' type="text" placeholder='FirstName'/> 
          <br />
          <label htmlFor="">LastName</label>
          <br />
          <input className='bg-white w-[450px] h-8 rounded' type="text" placeholder='LastName'/>
          <br />
          <label htmlFor="">Email <sup className='text-red-400'>*</sup></label>
          <br />
          <input className='bg-white w-[450px] h-8 rounded' type="text" placeholder='EmailAddress'/>
          <br />
          <label htmlFor="">Subject</label>
          <br />
          <input className='bg-white w-[450px] h-8 rounded' type="text" placeholder='Subject'/>
          <br /><br />
          <label htmlFor="">Your Message <sup className="text-red-400 ">*</sup></label>
          <br />
          <input className='bg-white h-30 w-[500px] rounded ' type="text" placeholder='Your Message'/>
          <br /><br />
          <button className='h-10 w-40 rounded bg-blue-500 '>Submit</button>
        </form>

       </div>
      </section>
      </div>
    
  )
}

export default Contact
