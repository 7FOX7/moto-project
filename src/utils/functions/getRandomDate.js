import getRandomNum from "./getRandomNum"
import subtractDays from "./subtractDays"

const max = 1000
function getRandomDate() {
   return subtractDays(new Date(), getRandomNum(max))
}

export default getRandomDate