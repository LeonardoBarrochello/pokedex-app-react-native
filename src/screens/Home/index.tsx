import React, { useState } from "react";
import { BotaoOrdenacao, Container, ConteudoTitulo, Header, InputTexto, Titulo } from "./styles";

import Pokebola from "../../assets/icons/pokeball.svg"
import SortAsc from '../../assets/icons/sortasc.svg';
import SortDesc from '../../assets/icons/sortdesc.svg';
import SmallCard from "../../components/SmallCard";


export default function Home(){

    const [decrescente , setDecrescente ] = useState<boolean>(false)


    function handleFiltro(){
         setDecrescente(!decrescente)
    }

    return (
        <Container>
                <Header>
                        <ConteudoTitulo>
                                <Pokebola width={24} height={24} />
                                <Titulo>Pokemon</Titulo>
                        </ConteudoTitulo>
                        <BotaoOrdenacao
                            onPress={() => handleFiltro()}
                        >
                            {
                                decrescente ? <SortAsc/> : <SortDesc/>  
                            }
                             
                        </BotaoOrdenacao>
                </Header>
                <InputTexto

                    placeholder="Procurar"
                />

                <SmallCard/>         
        </Container>
    )
}