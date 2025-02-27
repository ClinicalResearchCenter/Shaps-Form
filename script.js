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
        questionBlock.classList.add("question");
        questionBlock.innerHTML = `<p>${index + 1}. ${q}</p>`;
        
        ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"].forEach((text, score) => {
            const label = document.createElement("label");
            label.style.display = "block";
            
            const radioBtn = document.createElement("input");
            radioBtn.type = "radio";
            radioBtn.name = `q${index}`;
            radioBtn.value = score + 1;
            
            label.appendChild(radioBtn);
            label.appendChild(document.createTextNode(` ${text}`));
            questionBlock.appendChild(label);
        });
        
        questionsDiv.appendChild(questionBlock);
    });
});

function calculateScore() {
    let score = 0;
    let answeredAll = true;
    const questions = document.querySelectorAll(".question");
    
    questions.forEach((question) => {
        const selected = question.querySelector("input:checked");
        if (selected) {
            score += parseInt(selected.value);
        } else {
            answeredAll = false;
        }
    });
    
    const result = document.getElementById("result");
    if (!answeredAll) {
        result.textContent = "Please answer all questions before submitting.";
        result.style.color = "red";
    } else {
        result.textContent = `Your Score: ${score}. ${score >= 30 ? "You meet the threshold." : "You do not meet the threshold."}`;
        result.style.color = "black";
    }
}
