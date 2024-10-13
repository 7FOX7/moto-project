import { useState } from "react";
import { useScreenSize } from "../../../contexts/ScreenSizeContext"
import { useSelectedUser } from "../../../contexts/SelectedUserContext";
import { useTheme } from "@emotion/react";
import CustomContentContainer from "../../../customs/components/CustomContentContainer";
import CustomSelect from "../../../customs/components/CustomSelect";
import CustomCarousel from "../../../customs/components/CustomCarousel";
import CustomLink from "../../../customs/components/CustomLink";
import Grid2 from "@mui/material/Grid2"
import Box from "@mui/material/Box"

const selectOptions = [
   {
      id: 'option1', 
      name: 'Arts'
   }
]

const ActivityContent = () => {
   const [selectedActivityType, setSelectedActivityType] = useState('Arts') 
   const isSmallScreen = useScreenSize(); 
   const {selectedUser} = useSelectedUser(); 
   const theme = useTheme(); 

   function handleChange() {
      setSelectedActivityType('Arts')
   }

   const {arts} = selectedUser

   console.log('Component was rerendered')
   return (
      <>
         <CustomContentContainer
            showMargin={isSmallScreen ? false : true}
            height={isSmallScreen ? "100%" : "500px"}
            showTransBox={isSmallScreen ? false : true}
            content={
               <>
                  <Grid2
                     container
                     direction="column"
                     rowSpacing={4}
                     size={12}
                  >
                     {isSmallScreen ?
                        <CustomSelect 
                           selectedOption={selectedActivityType}
                           options={selectOptions}
                           onChange={handleChange}
                           showAll={false}
                        />
                        : 
                        <Box>
                           <CustomLink
                              content={selectOptions[0].name}
                              color={theme.palette.secondary.main}
                              textDecorationColor={theme.palette.secondary.main}
                              typography={isSmallScreen ? theme.typography.profile.mobile.activityType : theme.typography.profile.desktop.activityType}
                              underline="always"
                              contentAlign="left"
                              ariaLabel="Arts Activity"
                           />
                        </Box>
                     }    
                     <CustomCarousel
                        data={arts}
                        type="art"
                     />
                  </Grid2>
               </>
            }
         >
         </CustomContentContainer>
      </>
   )
}

export default ActivityContent

/*
const CustomLink = memo(function CustomLink(props) {
	const {
		content, 
		typography,
		onClick,
		textDecorationColor,
		underline="none", 
		color="primary", 
		ariaLabel=""
	} = props

	return (
		<>
			<Link
				component="button"
				underline={underline}
				aria-label={ariaLabel}
				sx={{
					textDecorationColor: textDecorationColor, 
					textWrap: "nowrap"
				}}	
				onClick={onClick}
			>
				{typeof(content) === "string" ? 
					<CustomText 
						color={color}
						text={content}
						typography={typography}
					/>
					:
					content
				}
			</Link>
		</>
	)
}) 
*/