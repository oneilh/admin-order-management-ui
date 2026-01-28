// type ProgressProps = {
//   current: string;
//   goal: string;
// };
// const Progress = ({ current, goal }: ProgressProps) => {

//   return (
//     <section className="flex flex-col gap-2">
//       <div className="flex justify-between text-sm text-neutral-700">
//         <p className="text-gray-500">Units: </p>
//         <p className="font-semibold">
//           {Number(current)}/{Number(goal)}
//         </p>
//       </div>
//       <progress
//         className="progress text-red-600  w-full"
//         value="40"
//         max="100"
//       ></progress>
//     </section>
//   );
// };

// export default Progress;

type ProgressProps = {
  current: string;
  goal: string;
  percent: string;
};

const Progress = ({ current, goal, percent }: ProgressProps) => {
  const currentValue = Number(current);
  const goalValue = Number(goal);
  const percentage = Number(percent);

  const getProgressColor = () => {
    if (percentage >= 100) return "progress-success";
    if (percentage >= 60) return "progress-info";
    if (percentage >= 25) return "progress-warning";
    return "progress-error";
  };

  return (
    <section className="flex flex-col gap-2">
      <div className="flex justify-between text-sm text-neutral-700">
        <p className="text-gray-500">Units</p>
        <p className="font-semibold">
          {currentValue}/{goalValue}
        </p>
      </div>

      <progress
        className={`progress w-full ${getProgressColor()}`}
        value={percentage}
        max={100}
      />
    </section>
  );
};

export default Progress;
