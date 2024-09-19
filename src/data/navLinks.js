const navLinks = [
   {
      id: "workoutLink", 
      title: "Workout", 
      path: "/workout", 
      subLinks: [
         {
            id: "workoutVideos", 
            title: "Videos", 
            path: "/videos"
         }, 
         {
            id: "workoutPrograms", 
            title: "Programs", 
            path: "/programs"
         }, 
         {
            id: "workoutProgress", 
            title: "Progress", 
            path: "/progress"
         }
      ] 
   }, 
   {
      id: "healthyLivingLink", 
      title: "Healthy Living", 
      path: "/healthy-living", 
      subLinks: [
         {
            id: "healthyLivingFitness", 
            title: "Fitness", 
            path: "/articles"
         }, 
         {
            id: "healthyLivingNutrition", 
            title: "Nutrition", 
            path: "/articles"
         }, 
         {
            id: "healthyLivingRecipes", 
            title: "Healthy Recipes", 
            path: "/articles"
         }, 
         {
            id: "healthyLivingMental", 
            title: "Mental Health", 
            path: "/articles"
         }
      ]
   }, 
   {
      id: "communityLink", 
      title: "Community", 
      path: "/community", 
      subLinks: [
         {
            id: "communityDiscussions", 
            title: "Discussions", 
            path: "/discussions"
         } 
      ]
   }, 
   {
      id: "blogsLink", 
      title: "Blogs", 
      path: "/blogs", 
      subLinks: [
         {
            id: "blogsSuccessStories", 
            title: "Success Stories", 
            path: "/success-stories"
         } 
      ]
   }, 
   {
      id: "aboutLink", 
      title: "About", 
      path: "/about", 
      subLinks: [
         {
            id: "aboutFAQ", 
            title: "FAQ", 
            path: "/faq"
         }, 
         {
            id: "aboutCareers", 
            title: "Careers", 
            path: "/careers"
         }, 
         {
            id: "aboutExperts", 
            title: "Experts", 
            path: "/experts"
         }
      ]
   }
]

export default navLinks