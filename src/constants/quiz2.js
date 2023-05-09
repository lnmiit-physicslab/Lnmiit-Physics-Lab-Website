export const quiz2 = {
  topic: 'Javascript',
  level: 'Beginner',
  totalQuestions: 7,
  perQuestionScore: 5,
  questions: [
    {
      question:
        'What is the relation between g and G?',
      choices: ['g=GM/R', 'G=gR²/M', 'G=gM/R²', 'g=GM²/R'],
      type: 'MCQs',
      correctAnswer: 'g=GM/R',
    },
    {
      question:
        '2. The value of g___',
      choices: ['decreases with altitude.', ' decreases as we go below the surface of earth', 'greatest at poles and least at equator.', 'all of the above.'],
      type: 'MCQs',
      correctAnswer: 'All of the above',
    },
    {
      question:
        'A simple harmonic motion is the one where the force is proportional to',
      choices: [
        'displacement',
        'acceleration',
        'Velocity',
        'Both a & b',
      ],
      type: 'MCQs',
      correctAnswer: 'Both a & b',
    },
    {
      question: 'The motion of bar Pendulum is',
      choices: ['Damped Oscillation', 'Simple Harmonic Motion', 'Simple Oscillation', 'None'],
      type: 'MCQs',
      correctAnswer: 'Simple Harmonic Motion',
    },
    {
      question: 'The time period is given by , where L is the distance between center of suspension and C.G',
      choices: ['T=2π√ I⁄Mg', 'T=1⁄2π√ I⁄MgL', 'T=2π√ I⁄MgL', 'T=2π√ MgL⁄I'],
      type: 'MCQs',
      correctAnswer: ' T=2π√ I⁄MgL',
    },
    {
      question: 'Time period T will have minimum value when L (k is the radius of gyration and L is the distance between center of suspension and C.G)',
      choices: ['L>>k', 'L<<k', 'L=k', 'L=2k'],
      type: 'MCQs',
      correctAnswer: 'L>>k'
    },
    {
      question: 'The bar oscillate in vertical plane with',
      choices: ['Very large amplitude(40°-50°)', 'Medium amplitude(20°-30°)', 'Small amplitude(10°-15°)', 'Very small amplitude(4°-5°)'],
      type: 'MCQs',
      correctAnswer: 'Medium amplitude(20°-30°)'
    }
  ],
}