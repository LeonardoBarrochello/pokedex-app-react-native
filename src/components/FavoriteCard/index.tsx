import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { useTheme } from "styled-components";
import { PokemonDTO } from "../../dtos/PokemonDTO";
import retornaSvg from "../../utils/retornaSvg";
import TypeCard from "../TypeCard";
import { Botao, Container, ConteudoSvg, ConteudoTexto, Descricao, LabelBold, Opcao, Tipos } from "./styles";


interface FavoriteCardProps {
     pokemon : PokemonDTO;
}

export default function FavoriteCard({pokemon} : FavoriteCardProps){

    const theme = useTheme();

    return(
        <Container>
            <ConteudoSvg>
                    {retornaSvg(pokemon.name,95,97)}
            </ConteudoSvg>
            <ConteudoTexto>
                 <Descricao>
                    <LabelBold 
                        type={pokemon.types[0].name} 
                    >
                        {pokemon.name}
                    </LabelBold>
                    <LabelBold 
                        type={pokemon.types[0].name} 
                        style={{
                            marginLeft:30
                        }}
                    >
                        {pokemon.code}
                    </LabelBold>
                 </Descricao>
                 <Tipos>
                     {
                        pokemon.types.map((p) => (
                            <TypeCard
                                key={p.id}
                                tipoPokemon={p}
                            />

                        ) )
                     
                     }
                   
                 </Tipos>
            </ConteudoTexto>
            <Opcao>
                 <Botao>
                      <MaterialCommunityIcons
                            name="heart-broken"
                            size={20}
                            color={theme.primary}
                      />
                 </Botao>
            </Opcao>
           
        </Container>


    )
}