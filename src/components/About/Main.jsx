import CustomHeading from "../../customs/components/CustomHeading"
import Content from "../Shared/Content"
import FaqSection from "./Faq/FaqSection"

const Main = () => {
	return (
		<Content>
			<CustomHeading
				text="About"
			/>
			<FaqSection />
		</Content>
	)
}

export default Main