function calculateBmi(height: number, weight: number): string {
  if (height < 50 || weight<3) return

  const bmi = weight/Math.pow(height/100, 2)

  if (bmi < 18.5) return "Underweight"
  if (bmi < 25) return "Normal (healthy weight)"
  return "Obese"
}

console.log(calculateBmi(180, 88))