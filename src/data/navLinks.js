const navLinks = [
   {
      id: "ridesLink", 
      title: "Rides", 
      path: "/rides", 
      subLinks: [
         {
            id: "ridesVideos", 
            title: "Videos", 
            path: "/rides"
         }, 
         {
            id: "ridesEvents", 
            title: "Events", 
            path: "/rides"
         }, 
         {
            id: "ridesArts", 
            title: "Arts", 
            path: "/rides"
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
         }, 
         {
            id: "communityTips", 
            title: "Tips", 
            path: "/tips"
         }, 
         {
            id: "communityProfiles", 
            title: "Profiles", 
            path: "/profiles"
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
            id: "aboutSupport", 
            title: "Support", 
            path: "/support"
         }, 
      ]
   }
]

export default navLinks

/*
   ok, lets assume, I have a 'Community' page which should contain three main sections: Profiles, Topics, and Tips; 

   1. Profiles section is implemented like this: 

   PROFILE: 
   1. contains a search bar to search for a user; 
   2. a container inside of which the results will be shown 

   TOPICS: 
   1. This will have a select box, so the user could select the topic and the results will be shown in the container
   2. Container, inside of which the topic results (filtered by the option selected will be displayed)

   TIPS: 
   1. Not really sure, how I can implement this section. Should that just be the list of all tips (without option to filter)
   2. What are good practices for implementing the 'Tips' section. 
   
   So, my questions are:
   1. Not really sure, how I can implement this section. Should that just be the list of all tips (without option to filter)
   2. What are good practices for implementing the 'Tips' section. 
    
*/