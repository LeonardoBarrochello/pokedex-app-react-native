import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";


export const Container = styled(LinearGradient)`
        flex: 1;
        align-items: center;
        justify-content: center;
`;

export const BotaoLogar = styled.TouchableOpacity`
        padding: 10px;
        margin-top: 30px;
        border: 1px solid;
        border-radius: 8px;
        background-color: transparent;
        justify-content: center;
        align-items: center;
        color: white;
`;


export const Label = styled.Text`
        font-size: 16px;
        color:  ${({theme}) => theme.primary};
        font-family:  ${({theme}) => theme.fonts.BOLD};
`;