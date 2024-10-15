function subtractDays(date, days) {
   const newDate = new Date(date); 
   const updatedDate = newDate.setDate(date.getDate() - days)

   return new Date(updatedDate).toISOString().split('T')[0]
}

export default subtractDays