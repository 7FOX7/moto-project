import { memo } from "react"
import { useNavigate } from "react-router-dom"
import CustomText from "./CustomText"
import Link from "@mui/material/Link"

const CustomLink = memo(function CustomLink(props) {
	const navigate = useNavigate(); 
	const {
		path, 
		content, 
		typography,
		textDecorationColor,
		underline="none", 
		color="primary", 
		ariaLabel=""
	} = props

	const handleClick = () => {
		navigate(path, {relative: "route"})	
	}

	return (
		<>
			<Link
				component="button"
				onClick={handleClick}
				underline={underline}
				aria-label={ariaLabel}
				sx={{
					textDecorationColor: textDecorationColor
				}}	
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