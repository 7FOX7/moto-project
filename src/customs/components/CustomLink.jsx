import { memo } from "react"
import { useNavigate } from "react-router-dom"
import { LinkContent } from "../../styles/style"
import Link from "@mui/material/Link"

const CustomLink = memo(function CustomLink(props) {
	const navigate = useNavigate(); 
	const {
		path, 
		content, 
		secondary=false, 
		bold=false, 
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
				underline="hover"
				aria-label={ariaLabel}	
			>
				{typeof(content) === "string" ? 
					<LinkContent 
						color={secondary ? "global.secondaryTextContent.main" : "primary"}
						typography={bold && "global.boldText"}
					>
						{content}
					</LinkContent>
					:
					content
				}
			</Link>
		</>
	)
}) 

export default CustomLink