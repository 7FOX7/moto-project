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