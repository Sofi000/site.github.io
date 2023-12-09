function gradeQuiz() {
    const answers = document.forms["carQuiz"];
    let score = 0;

    const correctAnswers = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    for (let i = 0; i < answers.length; i++) {
        if (answers[i].type === "radio") {
            const questionNum = i + 1;
            const selectedValue = parseInt(answers[i].value);
            if (selectedValue === correctAnswers[i]) {
                score += 1;
                answers[i].nextElementSibling.classList.add("correct");
            } else {
                answers[i].nextElementSibling.classList.add("wrong");
            }
        }
    }

   
}