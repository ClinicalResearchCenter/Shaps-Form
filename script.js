// script.js

document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        { text: "I would enjoy my favourite television or radio programme.", reverse: false },
        { text: "I would enjoy being with my family or close friends.", reverse: true },
        { text: "I would find pleasure in my hobbies and pastimes.", reverse: false },
        { text: "I would be able to enjoy my favourite meal.", reverse: true },
        { text: "I would enjoy a warm bath or refreshing shower.", reverse: true },
        { text: "I would find pleasure in the scent of flowers or the smell of a fresh sea breeze or freshly baked bread.", reverse: false },
        { text: "I would enjoy seeing other people's smiling faces.", reverse: true },
        { text: "I would enjoy looking smart when I have made an effort with my appearance.", reverse: false },
        { text: "I would enjoy reading a book, magazine or newspaper.", reverse: true },
        { text: "I would enjoy a cup of tea or coffee or my favorite drink.", reverse: false },
        { text: "I would find pleasure in small things, e.g. bright sunny day, a telephone call from a friend.", reverse: false },
        { text: "I would be able to enjoy a beautiful landscape or view.", reverse: false },
        { text: "I would get pleasure from helping others.", reverse: false },
        { text: "I would feel pleasure when I receive praise from other people.", reverse: false }
    ];

    const questionsDiv = document.getElementById("questions");
    questions.forEach((q, index) => {
        const questionBlock = document.createElement("div");
        questionBlock.innerHTML = `<p>${index + 1}. ${q.text}</p>`;
        for (let i = 0; i <= 3; i++) {
            const radioBtn = document.createElement("input");
            radioBtn.type = "radio";
            radioBtn.name = `q${index}`;
            radioBtn.value = i;
            questionBlock.appendChild(radioBtn);
            questionBlock.appendChild(document.createTextNode(i));
        }
        questionsDiv.appendChild(questionBlock);
    });
});

function calculateScore() {
    let score = 0;
    const questions = document.querySelectorAll("#questions div");
    questions.forEach((question, index) => {
        const selected = question.querySelector("input:checked");
        if (selected) {
            let value = parseInt(selected.value);
            if ([1, 3, 4, 7, 9].includes(index)) {
                value = 3 - value; // Reverse coding
            }
            score += value;
        }
    });
    document.getElementById("result").textContent = `Your Score: ${score}. ${score >= 30 ? "You meet the threshold." : "You do not meet the threshold."}`;
}
