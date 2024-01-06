import React from 'react'

const Student = () => {
    let std=['Mona','Riya','Nisha']
    let num=[1,2,3]
  return (
    <div>
      {std.map((std)=><h1>{std}</h1>)}
      {num.map((num)=><h1>{num}</h1>)}
    </div>
  )
}

export default Student
