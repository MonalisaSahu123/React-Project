import React from 'react'

const Student = () => {
    let std=['Mona','Riya','Nisha']
  return (
    <div>
      {std.map((std)=><h1>{std}</h1>)}
    </div>
  )
}

export default Student
