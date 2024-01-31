interface result { 
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
  }

function calculateExercises(trainingHours: number[], target: number): result{
    const periodLength = trainingHours.length
    const sum = trainingHours.reduce((acc, currentValue) => acc + currentValue, 0)
    const trainingDays= trainingHours.filter(day => day>0).length
    const average = sum / periodLength
    const result = {
        periodLength,
        trainingDays,
        success: trainingDays > target,
        rating: 2,
        ratingDescription: 'good',
        target,
        average        
    }

    return result
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))