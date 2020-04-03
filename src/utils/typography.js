import Typography from "typography"
import funstonTheme from "typography-theme-funston"

const typography = new Typography(funstonTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
