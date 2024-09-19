import { memo } from "react"
import { useNavigate } from "react-router-dom"
import { NavLinkContent } from "../../styles/style"
import Link from "@mui/material/Link"

const CustomNavLink = memo(function CustomNavLink(props) {
	const navigate = useNavigate(); 
	const {path, title, secondary=false, bold=false} = props
	const handleClick = () => {
		navigate(path, {relative: "route"})	
	}
	return (
		<>
			<Link
				component="button"
				onClick={handleClick}
				underline="hover"
			>
				<NavLinkContent 
					color={secondary ? "global.secondaryTextContent.main" : "primary"}
					typography={bold && "global.boldText"}
				>
					{title}
				</NavLinkContent>
			</Link>
		</>
	)
}) 

export default CustomNavLink