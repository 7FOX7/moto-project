import getRandomNum from "./getRandomNum";

const interests = ['AI', 'Books', 'Cars', 'Fashion', 'Food', 'History', 'Movies', 'Music', 'Pets', 'Politics', 'Science', 'Software', 'Sport', 'Travels', 'Video-Games']

function getRandomInterests(amount) {
   if(amount > interests.length) {
      return
   }

   let index = 0
   const randomInterests = []
   const interestSet = new Set(); 

   while(interestSet.size !== amount) {
      const randomIndex = getRandomNum(interests.length)
      const randomInterest = interests[randomIndex]
      if(!interestSet.has(randomInterest)) {
         interestSet.add(randomInterest)   
         index+=1
         randomInterests.push(
            {
               id: `interest${index}`, 
               name: randomInterest
            }
         )
      }
   }
   
   console.log(randomInterests)
   return randomInterests
}

export default getRandomInterests

