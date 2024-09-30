import Content from "../Shared/Content"
import Profiles from "./Profiles"
import Tips from "./Tips"
import Topics from "./Topics"

const contentHeight = "300vh"

const Main = () => {
    return (
        <Content
            height={contentHeight}
        >
            <Topics />
            <Profiles />
            <Tips />
        </Content>
    )
}

export default Main 