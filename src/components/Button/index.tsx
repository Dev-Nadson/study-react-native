import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { button_styles } from "./styles";

interface IButton extends TouchableOpacityProps {
    title: string,
    onPress?: () => {}
}

function Button(props: IButton) {
    const { title, ...rest } = props
    return <>
        <TouchableOpacity style={button_styles.container} {...rest} activeOpacity={0.7}>
            <Text style={button_styles.title}>{title}</Text>
        </TouchableOpacity>
    </>
}

export { Button }