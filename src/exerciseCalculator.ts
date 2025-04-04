export interface ExerciseResult {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

export interface Rating {
    rating: number;
    description: string;
}

export const calculateRating = (average: number, target: number): Rating => {
    if (average >= target) {
        return { rating: 3, description: "great job!" };
    }
    if (average >= target * 0.8) {
        return { rating: 2, description: "not too bad but could be better" };
    }
    return { rating: 1, description: "bad" };
};

export const calculateExercises = (daily_exercises: number[], target: number): ExerciseResult => {
    const periodLength = daily_exercises.length;
    const trainingDays = daily_exercises.filter(day => day > 0).length;
    const totalHours = daily_exercises.reduce((sum, hours) => sum + hours, 0);
    const average = totalHours / periodLength;
    const success = average >= target;

    const ratingObj = calculateRating(average, target);
    const rating = ratingObj.rating;
    const ratingDescription = ratingObj.description;

    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average,
    };
};
