async function artificialDelay(delay, promise) {
   return new Promise(resolve => {
      setTimeout(resolve, delay)
   })
   .then(() => promise)
} 

export default artificialDelay