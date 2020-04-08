export const DISPLAY_ANSWERED = 'DISPLAY_ANSWERED'
export const DISPLAY_UNANSWERED = 'DISPLAY_UNANSWERED'

export const displayAnswered = () => {
  return {
    type: DISPLAY_ANSWERED
  }
}

export const displayUnanswered = () => {
  return {
    type: DISPLAY_UNANSWERED
  }
}