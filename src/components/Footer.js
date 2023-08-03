import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-gray-100 border-t-4  px-3 py-16 text-center'>
      <p className='cursor-wait border-y-2 border-black mx-auto max-w-fit px-2 pb-2 ' title='It is nextjs my friend. Third project, and simple creation for learning;'>
        {"Created with 🖤 by Ragab".split(" ").map((word, i) => <span key={i} className='block text-xl'>\\\ {word} &#47;&#47;&#47;</span> )}
      </p>
    </footer>
  )
}
