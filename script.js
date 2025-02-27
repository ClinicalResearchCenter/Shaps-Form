// script.js

document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        "I would enjoy my favourite television or radio programme.",
        "I would enjoy being with my family or close friends.",
        "I would find pleasure in my hobbies and pastimes.",
        "I would be able to enjoy my favourite meal.",
        "I would enjoy a warm bath or refreshing shower.",
        "I would find pleasure in the scent of flowers or the smell of a fresh sea breeze or freshly baked bread.",
        "I would enjoy seeing other people's smiling faces.",
        "I would enjoy looking smart when I have made an effort with my appearance.",
        "I would enjoy reading a book, magazine or newspaper.",
        "I would enjoy a cup of tea or coffee or my favorite drink.",
        "I would find pleasure in small things, e.g. bright sunny day, a telephone call from a friend.",
        "I would be able to enjoy a beautiful landscape or view.",
        "I would get pleasure from helping others.",
        "I would feel pleasure when I receive praise from other people."
    ];

    const questionsDiv = document.getElementById("questions");
    questions.forEach((q, index) => {
        const questionBlock = document.createElement("div");
        questionBlock.innerHTML = `<p>${index + 1}. ${q}</p>`;
        
        ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"].forEach((text, score) => {
            const radioBtn = document.createElement("input");
            radioBtn.type = "radio";
            radioBtn.name = `q${index}`;
            radioBtn.value = score + 1; // Assign scores 1 to 4
            questionBlock.appendChild(radioBtn);
            questionBlock.appendChild(document.createTextNode(` ${text}`));
            questionBlock.appendChild(document.createElement("br"));
        });
        
        questionsDiv.appendChild(questionBlock);
    });
});

function calculateScore() {
    let score = 0;
    const questions = document.querySelectorAll("#questions div");
    let answeredAll = true;
    
    questions.forEach((question) => {
        const selected = question.querySelector("input:checked");
        if (selected) {
            score += parseInt(selected.value); // Sum up scores
        } else {
            answeredAll = false;
        }
    });
    
    if (!answeredAll) {
        document.getElementById("result").textContent = "Please answer all questions before submitting.";
    } else {
        document.getElementById("result").textContent = `Your Score: ${score}. ${score >= 30 ? "You meet the threshold." : "You do not meet the threshold."}`;
    }
}
