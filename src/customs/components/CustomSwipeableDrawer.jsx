import SwipeableDrawer from "@mui/material/SwipeableDrawer"

const CustomSwipeableDrawer = ({list, anchor, open, onOpen, onClose}) => {
	return (
		<>
			<SwipeableDrawer
				anchor={anchor}
				open={open}
				onOpen={onOpen}
				onClose={onClose}
				disableBackdropTransition={true}
			>
				{list}
			</SwipeableDrawer>
		</>
	)
}

export default CustomSwipeableDrawer