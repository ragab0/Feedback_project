"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Feedback() {

  const router = useRouter();
  const initState = {
    name: "",
    email: "",
    message: "",
  }
  const [formData, setFormData] = useState(initState)
  

  function changeHandler(e) {
    const current = e.target.name;
    setFormData(old => ({...old, [current]: e.target.value}))
  }
  
  async function handleSubmit(e) {
    e.preventDefault();
    // Send data
    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })

    const result = await res.json();
    return router.push('/thankyou')
    
  }

  return (
    <div className="feedback">
      <ol className=" uppercase text-[10px] mb-16 max-w-md grid gap-2">
        <li>A simple API endpoint created with nextjs as same as backend&apos;s framework like express.js and nest.js do</li>
        <li>a request send to the aPI endpoint with the data form on submitting, in demand we get a response that we creat</li>
      </ol>
      <h1 className=" font-bold text-4xl uppercase mb-16 underline underline-offset-4">Contact us</h1>
      <form 
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 text-black'
      >
        <input  type="text" 
                name="name" 
                value={formData.name} 
                placeholder="Name" 
                onChange={changeHandler} 
        />
        <input  type="mail" 
                name="email" 
                value={formData.email} 
                placeholder="Email" 
                onChange={changeHandler} 
        />
        <textarea name="message" 
                  placeholder="Write a message." 
                  value={formData.message} 
                  onChange={changeHandler}
                  rows={12}
        > 
        </textarea>
        <button className="bg-slate-800 text-white/90 hover:bg-slate-700 active:translate-y-1 mt-5">Submit</button>
      </form>
    </div>
  )
}
