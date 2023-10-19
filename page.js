// Fragments are the empty tags which acts as a container to store data
"use client"
import React, { useState } from 'react'

export const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, { title, desc }]);
    // console.log(title)
    // console.log(desc)
    settitle("")
    setdesc("")
    console.log(mainTask)
  }
  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setmainTask(copyTask)
  }

  let rendarTask = <h2>No Task Available</h2>
  if (mainTask.length > 0) {
    rendarTask = mainTask.map((t, i) => {
      return (
        <li className='flex items-center justify-between mb-8'>
          <div className='flex items-center justify-between mb-5 w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-lg font-medium'>{t.desc}</h6>
          </div>
          <button onClick={() => {
            deleteHandler(i);
          }}

            className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
        </li>
      )

    })
  }

  return (
    <>
      <h1 className='bg-black text-white p-5 m-2 text-5xl font-bold text-center' >Todo List</h1>
      <form onSubmit={submitHandler}>
        <input
          text="" className='m-5 px-2 py-2 border-zinc-800 border-4' placeholder='Enter Title Here' value={title} onChange={(e) => {
            settitle(e.target.value)
          }}
        />

        <input
          text="" className='m-5 px-2 py-2 border-zinc-800 border-4' placeholder='Enter Description Here' value={desc} onChange={(e) => {
            setdesc(e.target.value)
          }}
        />

        <button className='bg-black text-white px-4 py-3 m-3 border-2 font-bold rounded'>Add Task</button>
      </form>
      <hr />
      <div className='bg-slate-200 p-6'>
        <ul>
          {rendarTask}
        </ul>
      </div>
    </>
  )
}
export default page