import { Link } from "react-router-dom"
import { MainNavLink } from "../../styles/style"
import { SubNavLink } from "../../styles/style"
import ListItemButton from "@mui/material/ListItemButton"

const CustomNavLink = ({path, title, bold=false}) => {
	return (
		<ListItemButton 
			component={<Link />}
			to={path}
		>
			{bold ? <MainNavLink>{title}</MainNavLink> : <SubNavLink>{title}</SubNavLink>}
		</ListItemButton>
	)
}

export default CustomNavLink