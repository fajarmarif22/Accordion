import React, { useState } from 'react'
import data from './data'
import Question from './question'

function App() {
  const [question, setQuestion] = useState(data)

  return (
    <>
      <main>
        <div className='container'>
          <h3>Question and answers about login</h3>
          <section className='info'>
            {question.map((question) => {
              return <Question key={question.id} {...question} />
            })}
          </section>
        </div>
      </main>
    </>
  )
}

export default App
