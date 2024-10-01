import { Fragment } from "react"
import { useState } from "react"
import { useScreenSize } from "../../contexts/ScreenSizeContext"
import { useTheme } from "@emotion/react"
import CustomSelect from "../../customs/components/CustomSelect"
import CustomCarousel from "../../customs/components/CustomCarousel"
import CustomText from "../../customs/components/CustomText"
import CustomImage from "../../customs/components/CustomImage"
import {SectionBox} from "../../styles/style"
import {ScrollableContainer} from "../../styles/style"
import {StyledPaper} from "../../styles/style"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Grid2 from "@mui/material/Grid2"
import Divider from "@mui/material/Divider"
import events from "../../data/events"
import Link from "@mui/material/Link"
import eventTypes from "../../data/eventTypes"

const EventSection = () => {
   const [visibleEvents, setVisibleEvents] = useState(5); 
   const [filteredEvents, setFilteredEvents] = useState([...events])
   const [selectedEventType, setSelectedEventType] = useState('All'); 
   const isSmallScreen = useScreenSize(); 
   const theme = useTheme(); 

   const handleChange = (e) => {
      const selectedType = e.target.value
      const filteredEvents = selectedType === "All" ? events : events.filter(event => event.type === selectedType)
      setSelectedEventType(selectedType)
      setFilteredEvents(filteredEvents)
      setVisibleEvents(5)
   }

   const handleClick = (eventType) => {
      const selectedType = eventType
      const filteredEvents = selectedType === "All" ? events : events.filter(event => event.type === selectedType)
      setSelectedEventType(selectedType)
      setFilteredEvents(filteredEvents)
      setVisibleEvents(5)
   }

   return (
      <SectionBox component="section">
         <Box sx={{
            display: "flex", 
            color: theme.palette.common.white, 
            marginBottom: isSmallScreen && "10px" 
         }}>
            <CustomText 
               text="Events"
               variant="h2"
               typography={isSmallScreen ? theme.typography.global.mobile.sectionHeading : theme.typography.global.desktop.sectionHeading}
            />
            <Box
               sx={{
                  display: "flex", 
                  alignItems: "center", 
                  marginLeft: "10px", 
               }}
            >
               {isSmallScreen ? 
                  <CustomSelect 
                     selectedOption={selectedEventType}
                     options={eventTypes}
                     onChange={handleChange}
                  />
                  : 
                  <Grid2 
                     container
                     columnSpacing={1.5}
                     rowSpacing={1} 
                     size={12}
                     alignItems="center"
                  >
                     <Grid2>
                        <Link 
                           component="button"
                           onClick={() => handleClick("All")}
                        >
                           <CustomText
                              color={selectedEventType === "All" && theme.palette.secondary.main}
                              text="All"
                              typography={selectedEventType === "All" && theme.typography.rides.selectedEvent}
                           />
                        </Link>
                     </Grid2>
                     {eventTypes.map((type) => (
                        <Grid2 key={type.id}>
                           <Grid2>
                              <Link 
                                 component="button"
                                 onClick={() => handleClick(type.name)}
                              >
                                 <CustomText
                                    color={selectedEventType === type.name && theme.palette.secondary.main}
                                    text={type.name}
                                    typography={selectedEventType === type.name && theme.typography.rides.selectedEvent}
                                 />
                              </Link>
                           </Grid2>
                        </Grid2>
                     ))}
                  </Grid2>
               }
            </Box>
         </Box>
         {isSmallScreen ? 
            <CustomCarousel
               data={filteredEvents}
               type="event"
            />
            : 
            <ScrollableContainer>
                  <List>
                     {filteredEvents.slice(0, visibleEvents).map((event) => {
                        return (
                           <Fragment
                              key={event.id}
                           >
                              <ListItem>
                                 <Grid2
                                    container
                                    spacing={2}
                                    size={12}
                                 >
                                    <Grid2
                                       container
                                       size={{md: 12, lg: 12, xl: 6}}
                                    >
                                       <StyledPaper 
                                          sx={{
                                             width: "250px", 
                                             height: "170px",
                                             flexDirection: "column", 
                                             justifyContent: "start", 
                                             alignItems: "flex-start"
                                          }}
                                       >
                                          <Box 
                                             sx={{
                                                width: "100%",
                                                height: "130px", 
                                             }
                                          }>
                                             <CustomImage
                                                width="100%"
                                                height="100%"
                                                src={event.imgSrc}
                                                alt={event.imgAlt}
                                                borderRadius="15px 15px 0 0"
                                             />
                                          </Box>
                                          <Box sx={{
                                             margin: "5px"
                                          }}>
                                             <CustomText
                                                color={theme.palette.common.black}
                                                text={event.type}
                                             />
                                          </Box>
                                       </StyledPaper>
                                    </Grid2>
                                    <Grid2
                                       container
                                       rowSpacing={1}
                                       size={{md: 12, lg: 12, xl: 6}}
                                    >
                                       <Grid2
                                          container
                                          size={12}
                                       >
                                          <CustomText
                                             color={theme.palette.secondary.dark}
                                             text={event.title}
                                             typography={theme.typography.rides.eventTitle}
                                          />
                                       </Grid2>
                                       <Grid2
                                          container
                                          size={12}
                                       >
                                          <CustomText
                                             color={theme.palette.common.black}
                                             text={event.date}
                                          />
                                       </Grid2>
                                       <Grid2
                                          container
                                          size={12}
                                       >
                                          <CustomText
                                             color={theme.palette.common.black}
                                             text={"At " + event.place}
                                          />
                                       </Grid2>
                                    </Grid2>
                                 </Grid2>
                              </ListItem>
                              <br />
                              <Divider variant="middle" />
                              <br />
                           </Fragment>
                        )
                     })}
                  </List>
                  <Box 
                     sx={{ 
                        display: "flex", 
                        justifyContent: "center",
                     }}
                  >
                     {visibleEvents >= filteredEvents.length ?
                        <CustomText
                           color={theme.palette.common.black}
                           text="That's all, folks! 🎉"
                        />
                        : 
                        <Link 
                           component="button"
                           onClick={() => setVisibleEvents((prevVal) => prevVal + 10)}
                           sx={{ 
                              color: theme.palette.secondary.dark,
                              textDecorationColor: theme.palette.secondary.dark
                           }}
                        >
                           <CustomText 
                              color="inherit"
                              text="View More"
                           />
                        </Link>
                     }
                  </Box>
            </ScrollableContainer>
         }
      </SectionBox>
   )
}

export default EventSection