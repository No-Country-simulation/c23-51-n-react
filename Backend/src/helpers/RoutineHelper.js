 const formatRoutine = (rows) => {
  const routinesMap = {}
  rows.forEach((row) => {
    if (!routinesMap[row.routine_id]) {
      routinesMap[row.routine_id] = {
        routine_id: row.routine_id,
        routine_name: row.routine_name,
        routine_description: row.routine_description,
        routine_aditional_description: row.routine_aditional_description,
        routine_duration_total: row.routine_duration_total,
        routine_number_exercise: row.routine_number_exercise,
        routine_repetition: row.routine_repetition,
        routine_difficulty: row.routine_difficulty,
        routine_tag: JSON.parse(row.routine_tag),
        routine_created_a: row.routine_created_at,
        exercises: []
      }
    }

    routinesMap[row.routine_id].exercises.push({
      exercise_id: row.exercise_id,
      exercise_name: row.exercise_name,
      exercise_description: row.exercise_description,
      exercise_benefit: row.exercise_benefit,
      exercise_advice: row.exercise_advice,
      exercise_repetition: row.exercise_repetition,
      exercise_duration: row.exercise_duration,
      exercise_difficulty: row.exercise_difficulty,
      exercise_video_id: row.exercise_video_id,
      exercise_url_video: row.exercise_url_video,
      exercise_created_at: row.exercise_created_at,
      exercise_order_number: row.order_number
    })
  })

  return Object.values(routinesMap)
}

module.exports = {
  formatRoutine
};