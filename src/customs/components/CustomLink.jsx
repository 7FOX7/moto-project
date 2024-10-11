import { memo } from "react"
import CustomText from "./CustomText"
import Link from "@mui/material/Link"

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

export default CustomLink