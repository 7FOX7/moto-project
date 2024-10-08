import { Fragment } from "react"
import { useState } from "react"
import { useScreenSize } from "../../../contexts/ScreenSizeContext"
import { useTheme } from "@emotion/react"
import CustomSelect from "../../../customs/components/CustomSelect"
import CustomCarousel from "../../../customs/components/CustomCarousel"
import CustomText from "../../../customs/components/CustomText"
import CustomImage from "../../../customs/components/CustomImage"
import {ScrollableContainer} from "../../../styles/style"
import {StyledPaper} from "../../../styles/style"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Grid2 from "@mui/material/Grid2"
import Divider from "@mui/material/Divider"
import events from "../../../data/events"
import Link from "@mui/material/Link"
import eventTypes from "../../../data/eventTypes"

const EventContent = () => {
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
      <>
         <Grid2
            container
            size={12}
            spacing={{xs: 2, sm: 2, md: 1, lg: 1, xl: 1}}
         >
            {isSmallScreen ? 
               <Grid2
                  size={12}
               >
                  <CustomSelect 
                     selectedOption={selectedEventType}
                     options={eventTypes}
                     onChange={handleChange}
                  />
               </Grid2>
               : 
               <Grid2 
                  container
                  columns={12}
                  columnSpacing={1.5}
                  rowSpacing={1} 
                  alignItems="center"
               >
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
                  {eventTypes.map((type) => (
                     <Link
                        key={type.id} 
                        component="button"
                        onClick={() => handleClick(type.name)}
                     >
                        <CustomText
                           color={selectedEventType === type.name && theme.palette.secondary.main}
                           text={type.name}
                           typography={selectedEventType === type.name && theme.typography.rides.selectedEvent}
                        />
                     </Link>
                  ))}
               </Grid2>
            }
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
                              <ListItem
                                 disablePadding
                              >
                                 <Grid2
                                    container
                                    spacing={2}
                                    size={12}
                                 >
                                    <Grid2
                                       container
                                       size={12}
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
                                       size={12}
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
         </Grid2>
      </>
   )
}

export default EventContent