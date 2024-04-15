export default async function fetchBoardProgress() {
    const accessToken = 'QVDPZLH9XPU6';
    const apiUrl = `https://momentumsynergy.kanbantool.com/api/v3/boards/1050779/preload.json?access_token=${accessToken}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch board data');
        }

        const data = await response.json();
        const doneStage = data.workflow_stages.find((stage: { name: string; }) => stage.name === "Done");
        if (!doneStage) {
            throw new Error('No "Done" stage found');
        }
        console.log(doneStage);
        var statsForDoneBoard = data.stats.find((stat: { workflow_stage_id: any; }) => stat.workflow_stage_id === doneStage.id);

        if (!statsForDoneBoard) {
            return 0
        }
        const totalVisibleTasks = data.stats.reduce((total: any, stat: { visible_tasks: any; }) => total + stat.visible_tasks, 0);
        const progress = totalVisibleTasks > 0 ? 100 * statsForDoneBoard.visible_tasks / totalVisibleTasks : 0;
        return progress;
      } catch (error) {
          console.error('Error fetching board data:', error);
          return null;
      }
    }
//   fetchBoardProgress()
//   .then(progress => {
//     if (progress !== null) {
//         console.log('Progress:', progress);
//     } else {
//         console.log('Failed to fetch progress.');
//     }
//   })
//   .catch(err => console.error(err));