# QuizMaster

QuizMaster is an engaging web-based quiz application with gamification features. It fetches quiz data from an API and presents it through an intuitive user interface.

## Features

- Start quiz functionality
- Multiple-choice questions
- Summary of results upon quiz completion
- Gamification elements (progress tracking, animations, confetti for high scores)
- Responsive design

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion (for animations)
- Canvas Confetti (for celebration effects)

## Setup Instructions

1. Clone the repository:
   \`\`\`
   git clone [https://github.com/ankit-agarwal-x/testline-quiz.git]
   cd quizmaster
   \`\`\`

2. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

3. Run the development server:
   \`\`\`
   npm run dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `app/`: Contains the main page component
- `components/`: Contains reusable React components
  - `Quiz.tsx`: Main quiz logic and state management
  - `Start.tsx`: Start screen component
  - `Question.tsx`: Question display and answer handling
  - `Summary.tsx`: Quiz summary and results display

## API Integration

The application fetches quiz data from the following API endpoint:
\`https://api.jsonserve.com/Uw5CrX\`

## Gamification Features

- Progress tracking: Users can see their current question number and total questions
- Animations: Smooth transitions between questions and components
- Celebration effects: Confetti animation for high scores (70% or above)
- Visual feedback: Color-coded buttons for selected answers

## Future Improvements

- Add a leaderboard feature
- Implement different difficulty levels
- Include a timer for each question
- Add sound effects for correct/incorrect answers

## Project demo
  [![Watch the video](https://img.vimeo.com/your_thumbnail.jpg)](https://vimeo.com/1052590103/890f5b876c)



