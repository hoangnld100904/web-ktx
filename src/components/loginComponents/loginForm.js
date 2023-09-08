import React from 'react'

export default function loginForm() {
  return (
    <div className='loginForm'>
        <form>
            <input type='text' name='username' className='loginInput'></input>
            <input type='password' name='password' className='loginInput'></input>
        </form>
    </div>
  )
}
