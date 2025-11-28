import { TouchableOpacity, Text } from "react-native";
import { button_styles } from "./styles";

function Button() {
    return <>
        <TouchableOpacity style={button_styles.container}>
            <Text style={button_styles.title}>Adicionar</Text>
        </TouchableOpacity>
    </>
}

export { Button }