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
            path: "/community"
         }, 
         {
            id: "communityTips", 
            title: "Tips", 
            path: "/community"
         }, 
         {
            id: "communityProfiles", 
            title: "Profiles", 
            path: "/community"
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
            path: "/blogs"
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
            path: "/about"
         }, 
      ]
   }
]

export default navLinks