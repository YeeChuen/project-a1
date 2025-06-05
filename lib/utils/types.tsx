export type TSets = {
  id: number;
  reps: number;
  weights: number; // 0 equal to body weight / no weight is used
  duration?: number; // duration mainly used for cardio, such as HIIT or low intensity, Experimental atm
};

export type TExercise = {
  id?: number;
  exerciseName: string;
  description: string;
  reps: number;
  weights: number; // 0 equal to body weight / no weight is used
  duration?: number; // duration mainly used for cardio, such as HIIT or low intensity, Experimental atm
  // sets: TSets[];
};

export type TSession = {
  key: number;
  id: number;
  sessionName: string;
  exercises: TExercise[];
};
