import React from 'react'
import ReactMarkdown from 'react-markdown'


function Markdown({markDown}) {
  return (
    <div>
     <ReactMarkdown 
     children={markDown} 
     ></ReactMarkdown>
    </div>
  )
}

export default Markdown
