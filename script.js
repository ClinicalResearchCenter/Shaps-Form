document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("shaps-form");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let totalScore = 0;
        const questions = document.querySelectorAll("ol li");

        for (let i = 0; i < questions.length; i++) {
            const selectedOption = questions[i].querySelector("input[type='radio']:checked");
            if (selectedOption) {
                totalScore += parseInt(selectedOption.value); // Using flipped 0-3 scale
            } else {
                alert(`Please answer question ${i + 1}`);
                return;
            }
        }

        // Display the result
        resultDiv.innerHTML = `<h2>Your SHAPS Score: ${totalScore}</h2>
            <p><strong>Interpretation:</strong></p>
            <ul>
                <li><strong>0-10:</strong> Very high pleasure response (very low anhedonia)</li>
                <li><strong>11-20:</strong> High pleasure response (low anhedonia)</li>
                <li><strong>21-30:</strong> Moderate pleasure response</li>
                <li><strong>31-42:</strong> Low pleasure response (high anhedonia)</li>
            </ul>`;
        resultDiv.style.display = "block";
    });
});
