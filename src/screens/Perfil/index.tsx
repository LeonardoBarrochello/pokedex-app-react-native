import React from "react";
import { Image } from "react-native";
import { BackgroundImage, BotaoSair, Container, Conteudo, Header, Sair, Titulo } from "./styles";


export default function Perfil(){
    return(
        <Container>
                <Header>
                        <Titulo>Perfil</Titulo>

                </Header>

                <Conteudo>
                        <BackgroundImage>
                              <Image 
                                    source={{
                                        uri:"https://avatars.githubusercontent.com/u/79065887?v=4"
                                    }}
                                    style={{
                                        width: 130,
                                        height:130,
                                        borderRadius:50
                                    }}
                              />
                        </BackgroundImage>
                        <Titulo>Leonardo</Titulo>
                        <BotaoSair>
                                <Sair>Sair</Sair>
                        </BotaoSair>
                </Conteudo>
        </Container>
    )
}