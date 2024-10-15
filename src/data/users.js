import getRandomDate from "../utils/functions/getRandomDate";
import getRandomInterests from "../utils/functions/getRandomInterests"
import getRandomNum from "../utils/functions/getRandomNum";

const max = 1000; 

const users = [
   {
      id: "userId1", 
      username: "7FOX7", 
      email: "fox@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm passionate about whatever makes me happy!", 
      interests: getRandomInterests(4), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-biker-showing-hand.webp",
            imgAlt: "A biker showing hand" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-girl-on-motorcycle.webp", 
            imgAlt: "A girl on motorcycle"
         }, 
         {
            id: "userArt3", 
            imgSrc: "/images/art-a-couple-riding-a-motorbike.webp",
            imgAlt: "A couple riding a motorbike" 
         }, 
         {
            id: "userArt4",
            imgSrc: "/images/art-dirt-bike.webp", 
            imgAlt: "A dirt bike"
         },
      ]
   }, 
   {
      id: "userId2", 
      username: "polartVud33", 
      email: "polartVud@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Music fills the air, whether I'm strumming my guitar or discovering new playlists.", 
      interests: getRandomInterests(3), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-idle-biker.webp", 
            imgAlt: "An idle biker"
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-empty-motorcycle.webp", 
            imgAlt: "An empty motorcycle"
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-a-man-with-beard-riding-a-motorbike.webp", 
            imgAlt: "A man with beard riding a motorbike"
         }, 
         {
            id: "userArt4",
            imgSrc: "/images/art-biker-riding-touring-motorcycle-jumps.webp",
            imgAlt: "A biker showing hand" 
         },
         {
            id: "userArt5",
            imgSrc: "/images/art-a-motorbiker-standing-on-a-back-wheel.webp", 
            imgAlt: "A motorbiker standing on a back wheel"
         },
      ]
   },
   {
      id: "userId3", 
      username: "RadiantPhoenix82", 
      email: "radiantPhoenix@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!", 
      interests: getRandomInterests(2), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-standing-girl.webp",
            imgAlt: "A standing girl" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-girl-on-motorcycle.webp", 
            imgAlt: "A girl on a motorcycle"
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-man-motorcycle.webp", 
            imgAlt: "A man on a motorcycle"
         }, 
         {
            id: "userArt4",
            imgSrc: "/images/art-suzuki-motorbike.webp", 
            imgAlt: "Suzuki motorbike"
         },
      ]
   },
   {
      id: "userId4", 
      username: "quantumPanda", 
      email: "quantum@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!", 
      interests: getRandomInterests(3), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-girl-on-motorcycle.webp", 
            imgAlt: "A girl on a motorcycle" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-standing-girl.webp",
            imgAlt: "A standing girl" 
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-man-motorcycle.webp", 
            imgAlt: "A man on a motorcycle"
         }, 
         {
            id: "userArt4",
            imgSrc: "/images/art-suzuki-motorbike.webp", 
            imgAlt: "Suzuki motorbike"
         },
      ]
   },
   {
      id: "userId5", 
      username: "velvet_thunder", 
      email: "velvet@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!", 
      interests: getRandomInterests(2), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-a-man-on-a-motorbike-idle.webp",
            imgAlt: "A man on a motorbike idle" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-girl-riding-a-motorbike-with-the-wind.webp", 
            imgAlt: "A girl riding a motorbike with the wind"
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-empty-motorcycle.webp", 
            imgAlt: "An empty motorcycle"
         }, 
         {
            id: "userArt4",
            imgSrc: "/images/art-a-woman-with-a-motorbike-behind-her.webp", 
            imgAlt: "A woman with a motorbike behind her"
         },
      ]
   },
   {
      id: "userId6", 
      username: "caffeine_ninja", 
      email: "caffeine@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!", 
      interests: getRandomInterests(3), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-a-couple-riding-a-motorbike.webp",
            imgAlt: "A couple riding a motorbike" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-a-man-with-beard-riding-a-motorbike.webp", 
            imgAlt: "A man with beard riding a motorbike"
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-dirt-bike.webp", 
            imgAlt: "A dirt bike"
         },
         {
            id: "userArt4",
            imgSrc: "/images/art-a-winter-soldier-riding-a-motorbike.webp", 
            imgAlt: "A Winter Soldier riding a motorbike"
         },
      ]
   },
   {
      id: "userId7", 
      username: "celestial-breeze", 
      email: "celestial@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!",  
      interests: getRandomInterests(4), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-biker-showing-hand.webp",
            imgAlt: "A biker showing hand" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-girl-on-motorcycle.webp", 
            imgAlt: "A girl on motorcycle"
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-a-woman-with-a-motorbike-behind-her.webp", 
            imgAlt: "A woman with a motorbike behind here"
         },
         {
            id: "userArt4",
            imgSrc: "/images/art-man-motorcycle.webp", 
            imgAlt: "A man on a motorcycle"
         },
         {
            id: "userArt5",
            imgSrc: "/images/art-racing-motorcyclists.webp", 
            imgAlt: "Racing motorcyclists"
         },
      ]
   },
   {
      id: "userId8", 
      username: "mystic-falcon", 
      email: "mystic@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!", 
      interests: getRandomInterests(5), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-biker-riding-touring-motorcycle-jumps.webp",
            imgAlt: "A biker showing hand" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-empty-motorcycle.webp", 
            imgAlt: "An empty motorcycle"
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-a-man-with-beard-riding-a-motorbike.webp", 
            imgAlt: "A man with beard riding a motorbike"
         }, 
         {
            id: "userArt4",
            imgSrc: "/images/art-idle-biker.webp", 
            imgAlt: "An idle biker"
         },
         {
            id: "userArt5",
            imgSrc: "/images/art-a-motorbiker-standing-on-a-back-wheel.webp", 
            imgAlt: "A motorbiker standing on a back wheel"
         },
      ]
   },
   {
      id: "userId9", 
      username: "ember_fox19", 
      email: "ember@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!", 
      interests: getRandomInterests(3), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-standing-girl.webp",
            imgAlt: "A standing girl" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-girl-on-motorcycle.webp", 
            imgAlt: "A girl on a motorcycle"
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-man-motorcycle.webp", 
            imgAlt: "A man on a motorcycle"
         }, 
         {
            id: "userArt4",
            imgSrc: "/images/art-suzuki-motorbike.webp", 
            imgAlt: "Suzuki motorbike"
         },
      ]
   },
   {
      id: "userId10", 
      username: "QuantumSparrow56", 
      email: "quantumSparr@gmail.com",     
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!", 
      interests: getRandomInterests(4), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-standing-girl.webp",
            imgAlt: "A standing girl" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-girl-on-motorcycle.webp", 
            imgAlt: "A girl on a motorcycle"
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-man-motorcycle.webp", 
            imgAlt: "A man on a motorcycle"
         }, 
         {
            id: "userArt4",
            imgSrc: "/images/art-suzuki-motorbike.webp", 
            imgAlt: "Suzuki motorbike"
         },
      ]
   },
   {
      id: "userId11", 
      username: "electricTiger88", 
      email: "electricTiger@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!",  
      interests: getRandomInterests(1), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-a-man-on-a-motorbike-idle.webp",
            imgAlt: "A man on a motorbike idle" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-girl-riding-a-motorbike-with-the-wind.webp", 
            imgAlt: "A girl riding a motorbike with the wind"
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-empty-motorcycle.webp", 
            imgAlt: "An empty motorcycle"
         }, 
         {
            id: "userArt4",
            imgSrc: "/images/art-a-woman-with-a-motorbike-behind-her.webp", 
            imgAlt: "A woman with a motorbike behind her"
         },
      ]
   },
   {
      id: "userId12", 
      username: "NeonJellyfish", 
      email: "neonJellyfish@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!",  
      interests: getRandomInterests(3), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-a-couple-riding-a-motorbike.webp",
            imgAlt: "A couple riding a motorbike" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-a-man-with-beard-riding-a-motorbike.webp", 
            imgAlt: "A man with beard riding a motorbike"
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-dirt-bike.webp", 
            imgAlt: "A dirt bike"
         },
         {
            id: "userArt4",
            imgSrc: "/images/art-a-winter-soldier-riding-a-motorbike.webp", 
            imgAlt: "A Winter Soldier riding a motorbike"
         },
      ]
   },
   {
      id: "userId13", 
      username: "CelestialVoyager62", 
      email: "celestialVoyager@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!", 
      interests: getRandomInterests(3), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-biker-riding-touring-motorcycle-jumps.webp",
            imgAlt: "A biker showing hand" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-empty-motorcycle.webp", 
            imgAlt: "An empty motorcycle"
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-a-man-with-beard-riding-a-motorbike.webp", 
            imgAlt: "A man with beard riding a motorbike"
         }, 
         {
            id: "userArt4",
            imgSrc: "/images/art-idle-biker.webp", 
            imgAlt: "An idle biker"
         },
         {
            id: "userArt5",
            imgSrc: "/images/art-a-motorbiker-standing-on-a-back-wheel.webp", 
            imgAlt: "A motorbiker standing on a back wheel"
         },
      ]
   },
   {
      id: "userId14", 
      username: "hidden-gems", 
      email: "hiddengems@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!", 
      interests: getRandomInterests(3), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-girl-on-motorcycle.webp", 
            imgAlt: "A girl on a motorcycle" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-standing-girl.webp",
            imgAlt: "A standing girl" 
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-man-motorcycle.webp", 
            imgAlt: "A man on a motorcycle"
         }, 
         {
            id: "userArt4",
            imgSrc: "/images/art-suzuki-motorbike.webp", 
            imgAlt: "Suzuki motorbike"
         },
      ]
   },
   {
      id: "userId15", 
      username: "caesar12", 
      email: "caesar12@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!", 
      interests: getRandomInterests(4), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-a-man-on-a-motorbike-idle.webp",
            imgAlt: "A man on a motorbike idle" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-girl-riding-a-motorbike-with-the-wind.webp", 
            imgAlt: "A girl riding a motorbike with the wind"
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-empty-motorcycle.webp", 
            imgAlt: "An empty motorcycle"
         }, 
         {
            id: "userArt4",
            imgSrc: "/images/art-a-woman-with-a-motorbike-behind-her.webp", 
            imgAlt: "A woman with a motorbike behind her"
         },
      ]
   },
   {
      id: "userId16", 
      username: "radiant_voyager", 
      email: "radiantVoyag@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!",  
      interests: getRandomInterests(5), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-biker-showing-hand.webp",
            imgAlt: "A biker showing hand" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-girl-on-motorcycle.webp", 
            imgAlt: "A girl on motorcycle"
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-a-woman-with-a-motorbike-behind-her.webp", 
            imgAlt: "A woman with a motorbike behind here"
         },
         {
            id: "userArt4",
            imgSrc: "/images/art-man-motorcycle.webp", 
            imgAlt: "A man on a motorcycle"
         },
         {
            id: "userArt5",
            imgSrc: "/images/art-racing-motorcyclists.webp", 
            imgAlt: "Racing motorcyclists"
         },
      ]
   },
   {
      id: "userId17", 
      username: "gloriaMoon", 
      email: "gloriaMoon@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!", 
      interests: getRandomInterests(6), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-biker-riding-touring-motorcycle-jumps.webp",
            imgAlt: "A biker showing hand" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-empty-motorcycle.webp", 
            imgAlt: "An empty motorcycle"
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-a-man-with-beard-riding-a-motorbike.webp", 
            imgAlt: "A man with beard riding a motorbike"
         }, 
         {
            id: "userArt4",
            imgSrc: "/images/art-idle-biker.webp", 
            imgAlt: "An idle biker"
         },
         {
            id: "userArt5",
            imgSrc: "/images/art-a-motorbiker-standing-on-a-back-wheel.webp", 
            imgAlt: "A motorbiker standing on a back wheel"
         },
      ]
   },
   {
      id: "userId18", 
      username: "frosted-galaxy", 
      email: "frostedGalaxy@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!", 
      interests: getRandomInterests(3), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-standing-girl.webp",
            imgAlt: "A standing girl" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-girl-on-motorcycle.webp", 
            imgAlt: "A girl on a motorcycle"
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-man-motorcycle.webp", 
            imgAlt: "A man on a motorcycle"
         }, 
         {
            id: "userArt4",
            imgSrc: "/images/art-suzuki-motorbike.webp", 
            imgAlt: "Suzuki motorbike"
         },
      ]
   },
   {
      id: "userId19", 
      username: "CosmicDancer45", 
      email: "cosmicDancer@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!",  
      interests: getRandomInterests(3), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-a-couple-riding-a-motorbike.webp",
            imgAlt: "A couple riding a motorbike" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-a-man-with-beard-riding-a-motorbike.webp", 
            imgAlt: "A man with beard riding a motorbike"
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-dirt-bike.webp", 
            imgAlt: "A dirt bike"
         },
         {
            id: "userArt4",
            imgSrc: "/images/art-a-winter-soldier-riding-a-motorbike.webp", 
            imgAlt: "A Winter Soldier riding a motorbike"
         },
      ]
   },
   {
      id: "userId20", 
      username: "LuminousQuest12", 
      email: "luminousQuest@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!", 
      interests: getRandomInterests(5), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-a-man-on-a-motorbike-idle.webp",
            imgAlt: "A man on a motorbike idle" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-girl-riding-a-motorbike-with-the-wind.webp", 
            imgAlt: "A girl riding a motorbike with the wind"
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-empty-motorcycle.webp", 
            imgAlt: "An empty motorcycle"
         }, 
         {
            id: "userArt4",
            imgSrc: "/images/art-a-woman-with-a-motorbike-behind-her.webp", 
            imgAlt: "A woman with a motorbike behind her"
         },
      ]
   },
   {
      id: "userId21", 
      username: "urban_explorer", 
      email: "urban@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!", 
      interests: getRandomInterests(4), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-a-woman-with-a-motorbike-behind-her.webp", 
            imgAlt: "A woman with a motorbike behind here"
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-girl-on-motorcycle.webp", 
            imgAlt: "A girl on motorcycle"
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-biker-showing-hand.webp",
            imgAlt: "A biker showing hand" 
         },
         {
            id: "userArt4",
            imgSrc: "/images/art-man-motorcycle.webp", 
            imgAlt: "A man on a motorcycle"
         },
         {
            id: "userArt5",
            imgSrc: "/images/art-racing-motorcyclists.webp", 
            imgAlt: "Racing motorcyclists"
         },
      ]
   },
   {
      id: "userId22", 
      username: "TurboPenguin34", 
      email: "turboPenguin@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!",  
      interests: getRandomInterests(5), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-biker-riding-touring-motorcycle-jumps.webp",
            imgAlt: "A biker showing hand" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-empty-motorcycle.webp", 
            imgAlt: "An empty motorcycle"
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-a-man-with-beard-riding-a-motorbike.webp", 
            imgAlt: "A man with beard riding a motorbike"
         }, 
         {
            id: "userArt4",
            imgSrc: "/images/art-idle-biker.webp", 
            imgAlt: "An idle biker"
         },
         {
            id: "userArt5",
            imgSrc: "/images/art-a-motorbiker-standing-on-a-back-wheel.webp", 
            imgAlt: "A motorbiker standing on a back wheel"
         },
      ]
   },
   {
      id: "userId23", 
      username: "WanderingNomad", 
      email: "wandering@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!",  
      interests: getRandomInterests(2), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-standing-girl.webp",
            imgAlt: "A standing girl" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-girl-on-motorcycle.webp", 
            imgAlt: "A girl on a motorcycle"
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-man-motorcycle.webp", 
            imgAlt: "A man on a motorcycle"
         }, 
         {
            id: "userArt4",
            imgSrc: "/images/art-suzuki-motorbike.webp", 
            imgAlt: "Suzuki motorbike"
         },
      ]
   },
   {
      id: "userId24", 
      username: "FunkyRhythm77", 
      email: "funkyRhythm@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!",  
      interests: getRandomInterests(5), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-a-man-on-a-motorbike-idle.webp",
            imgAlt: "A man on a motorbike idle" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-girl-riding-a-motorbike-with-the-wind.webp", 
            imgAlt: "A girl riding a motorbike with the wind"
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-empty-motorcycle.webp", 
            imgAlt: "An empty motorcycle"
         }, 
         {
            id: "userArt4",
            imgSrc: "/images/art-a-woman-with-a-motorbike-behind-her.webp", 
            imgAlt: "A woman with a motorbike behind her"
         },
      ]
   },
   {
      id: "userId25", 
      username: "neonLights45", 
      email: "neonLights@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!",  
      interests: getRandomInterests(3), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-a-couple-riding-a-motorbike.webp",
            imgAlt: "A couple riding a motorbike" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-a-man-with-beard-riding-a-motorbike.webp", 
            imgAlt: "A man with beard riding a motorbike"
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-dirt-bike.webp", 
            imgAlt: "A dirt bike"
         },
         {
            id: "userArt4",
            imgSrc: "/images/art-a-winter-soldier-riding-a-motorbike.webp", 
            imgAlt: "A Winter Soldier riding a motorbike"
         },
      ]
   },
   {
      id: "userId26", 
      username: "sunsetChaser3", 
      email: "sunsetChaser@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!",  
      interests: getRandomInterests(2), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-biker-showing-hand.webp",
            imgAlt: "A biker showing hand" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-girl-on-motorcycle.webp", 
            imgAlt: "A girl on motorcycle"
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-a-woman-with-a-motorbike-behind-her.webp", 
            imgAlt: "A woman with a motorbike behind here"
         },
         {
            id: "userArt4",
            imgSrc: "/images/art-man-motorcycle.webp", 
            imgAlt: "A man on a motorcycle"
         },
         {
            id: "userArt5",
            imgSrc: "/images/art-racing-motorcyclists.webp", 
            imgAlt: "Racing motorcyclists"
         },
      ]
   },
   {
      id: "userId27", 
      username: "ocean-explorer", 
      email: "oceanExplorer@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!",  
      interests: getRandomInterests(4), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-biker-riding-touring-motorcycle-jumps.webp",
            imgAlt: "A biker showing hand" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-empty-motorcycle.webp", 
            imgAlt: "An empty motorcycle"
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-a-man-with-beard-riding-a-motorbike.webp", 
            imgAlt: "A man with beard riding a motorbike"
         }, 
         {
            id: "userArt4",
            imgSrc: "/images/art-idle-biker.webp", 
            imgAlt: "An idle biker"
         },
         {
            id: "userArt5",
            imgSrc: "/images/art-a-motorbiker-standing-on-a-back-wheel.webp", 
            imgAlt: "A motorbiker standing on a back wheel"
         },
      ]
   },
   {
      id: "userId28", 
      username: "cozyNook88", 
      email: "cozyNook@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!",  
      interests: getRandomInterests(2), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-standing-girl.webp",
            imgAlt: "A standing girl" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-girl-on-motorcycle.webp", 
            imgAlt: "A girl on a motorcycle"
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-man-motorcycle.webp", 
            imgAlt: "A man on a motorcycle"
         }, 
         {
            id: "userArt4",
            imgSrc: "/images/art-suzuki-motorbike.webp", 
            imgAlt: "Suzuki motorbike"
         },
      ]
   },
   {
      id: "userId29", 
      username: "wildflowerDreamer", 
      email: "wildflower@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!", 
      interests: getRandomInterests(7), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-a-man-on-a-motorbike-idle.webp",
            imgAlt: "A man on a motorbike idle" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-girl-riding-a-motorbike-with-the-wind.webp", 
            imgAlt: "A girl riding a motorbike with the wind"
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-empty-motorcycle.webp", 
            imgAlt: "An empty motorcycle"
         }, 
         {
            id: "userArt4",
            imgSrc: "/images/art-a-woman-with-a-motorbike-behind-her.webp", 
            imgAlt: "A woman with a motorbike behind her"
         },
      ]
   },
   {
      id: "userId30", 
      username: "urbanNomad23", 
      email: "urbanNomad@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!", 
      interests: getRandomInterests(3), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-a-couple-riding-a-motorbike.webp",
            imgAlt: "A couple riding a motorbike" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-a-man-with-beard-riding-a-motorbike.webp", 
            imgAlt: "A man with beard riding a motorbike"
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-dirt-bike.webp", 
            imgAlt: "A dirt bike"
         },
         {
            id: "userArt4",
            imgSrc: "/images/art-a-winter-soldier-riding-a-motorbike.webp", 
            imgAlt: "A Winter Soldier riding a motorbike"
         },
      ]
   },
   {
      id: "userId31", 
      username: "frosted-cupcake", 
      email: "frostedCupcake@gmail.com", 
      registrationDate: getRandomDate(), 
      likes: getRandomNum(max), 
      bio: "I'm an enthusiastic soul with a passion for life, thriving on variety and adventure. From hiking scenic trails to savoring new recipes in the kitchen, there's never a dull moment. As a programming enthusiast, I spend my weekends coding projects, watching movies, and exploring local art galleries. My love for pets adds extra joy to my daily life. Life is a delightful journey filled with endless possibilities!",  
      interests: getRandomInterests(6), 
      arts: [
         {
            id: "userArt1", 
            imgSrc: "/images/art-biker-showing-hand.webp",
            imgAlt: "A biker showing hand" 
         }, 
         {
            id: "userArt2",
            imgSrc: "/images/art-girl-on-motorcycle.webp", 
            imgAlt: "A girl on motorcycle"
         }, 
         {
            id: "userArt3",
            imgSrc: "/images/art-a-woman-with-a-motorbike-behind-her.webp", 
            imgAlt: "A woman with a motorbike behind here"
         },
         {
            id: "userArt4",
            imgSrc: "/images/art-man-motorcycle.webp", 
            imgAlt: "A man on a motorcycle"
         },
         {
            id: "userArt5",
            imgSrc: "/images/art-racing-motorcyclists.webp", 
            imgAlt: "Racing motorcyclists"
         },
      ]
   }
]

export default users