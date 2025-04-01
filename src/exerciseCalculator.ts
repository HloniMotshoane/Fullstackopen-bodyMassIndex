interface Result {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}
const calculateExercises = (dailyExercises: number[], target: number): Result => {
    const periodLength = dailyExercises.length;
    const trainingDays = dailyExercises.filter(day => day > 0).length;
    const average = dailyExercises.reduce((sum, day) => sum + day, 0) / periodLength;

    const success = average >= target;
    let rating: number;
    let ratingDescription: string;

    if (average >= target) {
        rating = 3;
        ratingDescription = "Great job, keep it up!";
    } else if (average >= target * 0.75) {
        rating = 2;
        ratingDescription = "Not too bad but could be better";
    } else {
        rating = 1;
        ratingDescription = "You need to put in more effort!";
    }

    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    };
}
const target = Number(process.argv[2]);
const exercises = process.argv.slice(3).map(Number);

if (!target || exercises.some(isNaN)) {
    console.log("Please provide a valid target and daily exercise hours.");
} else {
    console.log(calculateExercises(exercises, target));
}