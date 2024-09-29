import { Fragment } from "react"
import { useState } from "react"
import { useScreenSize } from "../../contexts/ScreenSizeContext"
import { useTheme } from "@emotion/react"
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

const EventSection = () => {
   const [visibleEvents, setVisibleEvents] = useState(6); 
   const isSmallScreen = useScreenSize(); 
   const theme = useTheme(); 
   return (
      <SectionBox component="section">
         <Box sx={{
            alignSelf: "flex-start", 
            marginBottom: "10px"
         }}>
            <CustomText 
               text="Events"
               variant="h2"
               typography={isSmallScreen ? theme.typography.global.mobile.sectionHeading : theme.typography.global.desktop.sectionHeading}
            />
         </Box>

         {isSmallScreen ? 
            <CustomCarousel
               data={events}
               type="event"
            />
            : 
            <ScrollableContainer>
                  <List>
                     {events.slice(0, visibleEvents).map((event) => {
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
                                             color={theme.palette.rides.eventTitle.main}
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
                     {visibleEvents >= events.length ?
                        <CustomText
                           color={theme.palette.common.black}
                           text="That's all, folks! 🎉"
                        />
                        : 
                        <Link 
                           component="button"
                           onClick={() => setVisibleEvents((prevVal) => prevVal + 10)}
                           sx={{ 
                              color: theme.palette.common.black,
                              textDecorationColor: theme.palette.common.black
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


