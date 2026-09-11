import { useState } from "react";

const Section = () => {

  const [noteTitle, setnoteTitle] = useState('')
  const [noteText, setnoteText] = useState('')
  const [task, setTask] = useState([])

  const deleteTask = (idx) => {
    const copytask = [...task]
    copytask.splice(idx, 1)
    setTask(copytask)
  }

  const formHandler = (e) => {
    e.preventDefault()

    const copytask = [...task]
    copytask.push({ noteTitle, noteText })

    setTask(copytask)
    setnoteTitle('')
    setnoteText('')
  }

  return (
    <div className='flex flex-col lg:flex-row min-h-screen'>
      {/* right side jo ka forms handling ka lia h  */}
      <div className='p-4 sm:p-6 md:p-8 lg:p-10 w-full lg:w-1/2'>
        <form onSubmit={(e) => { formHandler(e) }} className='flex flex-col gap-5 p-4'>
          <h1 className='text-3xl font-medium p-3'>Add Notes</h1>
          <input type="text" placeholder='Enter Notes Title...' value={noteTitle} onChange={(e) => { setnoteTitle(e.target.value) }} className='p-4 outline-2 rounded outline-purple-400 font-normal text-xl' />
          <textarea placeholder='Write your notes here...' value={noteText} onChange={(e) => { setnoteText(e.target.value) }} className='bg-purple-100 outline-none p-5 rounded h-36 sm:h-96' ></textarea>
          <button className='bg-purple-400 py-2 rounded text-white active:scale-95 hover:bg-purple-500 cursor-pointer transition-colors'><i className="ri-add-large-line mr-3 text-xl text-center"></i>New Notes</button>
        </form>
      </div>
      {/* left side jo ka notes show karne ka lia h */}
      <div className="w-full lg:w-1/2 lg:h-screen overflow-hidden p-10 flex flex-col">
        <h1 className="p-4 font-medium text-3xl">Recent Notes</h1>
        <div className="flex flex-wrap gap-4 flex-1 min-h-0 overflow-y-auto scrollbar-hide">
          {/* <div className="w-full sm:w-[calc(50%-10px)] h-60 bg-black"></div> */}
          {task.map((elem, idx) => {
            return <div key={idx} className="w-full sm:w-[calc(50%-10px)] h-60 bg-linear-to-br from-fuchsia-300 to-purple-400  p-5 rounded-xl overflow-hidden ">
              <div className="flex items-center justify-between">
                <h1 className="font-medium text-2xl p-2">{elem.noteTitle}</h1>
                <i onClick={()=>{deleteTask(idx)}} className="ri-delete-bin-6-line bg-red-500 rounded-full text-xl p-1.5 text-white w-10 h-10 text-center hover:cursor-pointer"></i>
              </div>
              <p className="overflow-y-auto h-[calc(100%-56px)] break-words scrollbar-hide p-1">{elem.noteText}</p>
            </div>
          })}

        </div>
      </div>

    </div>
  )
}

export default Section