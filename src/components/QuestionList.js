import React from "react";

function QuestionList() {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
    </section>
  );
}

export default QuestionList;
})
}


function handleAnswerChange(id, correctIndex) {
  fetch(`http://localhost:4000/questions/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ correctIndex }),
  })
    .then((r) => r.json())
    .then((updatedQuestion) => {
      const updatedQuestions = quiz.map((quiz) => {
        if (quiz.id === updatedQuestion.id) return updatedQuestion;
        return quiz;
      });
      setQuiz(updatedQuestions);
    });
}
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {quiz.map((quiz) => (
        <QuestionItem key={quiz.id} question={quiz} onDeleteClick={handleClickDelete} onAnswerchange={handleAnswerChange}/>
      ))}
    </ul>
    </section>
  );
}