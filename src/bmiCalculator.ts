export type BmiClass = 'underweight' | 'normal' | 'overweight' | 'obese';

export const calculateBmi = (height: number, weight: number): number => {
    return weight / ((height / 100) ** 2);
};

export const classifyBmi = (bmi: number): BmiClass => {
    if (bmi < 18.5) return 'underweight';
    if (bmi >= 18.5 && bmi <= 24.9) return 'normal';
    if (bmi >= 25 && bmi <= 29.9) return 'overweight';
    return 'obese';
};

if (require.main === module) {
    const height = Number(process.argv[2]);
    const weight = Number(process.argv[3]);

    if (!height || !weight) {
        console.log('Please provide height and weight as arguments');
        process.exit(1);
    }

    const bmi = calculateBmi(height, weight);
    const classification = classifyBmi(bmi);
    console.log(`BMI: ${bmi.toFixed(2)} (${classification})`);
}
