$(document).ready(function () {
    $("form#stress_quiz").submit(function (event) {
        event.preventDefault();
        $("#ourRecommendation").show();
        console.log(ourRecommendation);
        let sumDifficulties = 0;
        $("input:radio:checked").each(function () {
            const myStressQuiz = parseInt($(this).val());
            sumDifficulties += myStressQuiz;
        });
        if (sumDifficulties <= 4) {
            ourRecommendation = "You are doing an amazing job! Your stress level is low. "
        }

        else if (sumDifficulties <= 8) {
            ourRecommendation = "You are doing well! We recommend you to do some meditation and yoga. "
        }

        else if (sumDifficulties > 8) {
            ourRecommendation = "Let's think of a plan for what to do next. Your stress level is high. "
        }
        $("#ourRecommendation").append(ourRecommendation + "<br>");
        $("#stress_quiz").hide();
    });
});