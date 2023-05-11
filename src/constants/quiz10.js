export const quiz10 = {
  topic: 'Javascript',
  level: 'Beginner',
  totalQuestions: 8,
  perQuestionScore: 5,
  questions: [
    {
      question:
        'Diffraction is the _______ phenomenon which describes the deviation from straight line propagation of a wave when it encounters an obstruction',
      choices: ['Particle', 'Wave', 'Both', 'None'],
      type: 'MCQs',
      correctAnswer: 'Waves',
    },
    {
      question:
        'In the case of light waves both opaque and transparent obstacles cause this effect',
      choices: ['opaque', 'Transparent', 'Partial transparent', 'Both a and b'],
      type: 'MCQs',
      correctAnswer: 'Partial transparent',
    },
    {
      question:
        'Fraunhoffer diffraction , which occurs when the waves incident on the slit and the screen (detector) are plane waves. This diffraction is produced when both the light source and screen are effectively at ______ from the given obstacle.',
      choices: [
        'Small distance',
        'Large distance',
        'Infinite distance',
        'Very small distance',
      ],
      type: 'MCQs',
      correctAnswer: 'Infinite distance',
    },
    {
      question: 'In frensel diffraction, diffraction is produed when',
      choices: ['Source is at a finite distance from the obstacle', 'Screen is at a finite distance from the obstacle', 'Either of them is at a finite distance from the obstacle', 'Both are at a finite distance from the obstacle'],
      type: 'MCQs',
      correctAnswer: 'Either of them is at a finite distance from the obstacle',
    },
    {
      question: 'We can observe Fraunhoffer diffraction experimentally by using a collimated light source and',
      choices: ['Placing the viewing screen at the focal plane of a convex lens', 'Convex lens is located behind the obstacle located behind the obstacle', 'By placing the screen at a large distance from the obstacle.', 'All of them'],
      type: 'MCQs',
      correctAnswer: 'All of them'
    },
    {
      question: 'Wave theory predicts that the Fraunhoffer diffraction pattern intensity due to a rectangular slit will be of the form',
      choices: ['I = IoSinβ/β2', 'I = IoSin2β/β2', 'I = IoSin2β/2β', 'I = IoSinβ/2β'],
      type: 'MCQs',
      correctAnswer: 'I = IoSin2β/β2'
    },
    {
      question: 'The minima in the diffraction pattern occurs when I(θ) =',
      choices: ['0', '1', 'Infinite', 'None'],
      type: 'MCQs',
      correctAnswer: '0'
    },
    {
      question: 'The slit width a can be calculated as a = ______? where y = the distance between central maxima to the mth order minima point and D = distance between slit and photo diode (observed form instrument)',
      choices: ['mD/y', 'my/D', 'mλD/y', 'mλy/D'],
      type: 'MCQs',
      correctAnswer: 'mλD/y'
    }
  ],
}