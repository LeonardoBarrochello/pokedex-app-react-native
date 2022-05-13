import React from "react";
import { Codigo, Container, ConteudoCodigo, ConteudoNome, ConteudoSvg, Nome } from "./styles";
import Charmander from '../../assets/pokemons/Charmander.svg'
import { PokemonDTO } from "../../dtos/PokemonDTO";
import retornaSvg from "../../utils/retornaSvg";
import { TouchableOpacityProps } from "react-native";

interface SmallCardProps extends TouchableOpacityProps {
      pokemon : PokemonDTO;
}

export default function SmallCard( { pokemon , ...rest } : SmallCardProps){
     console.log(pokemon)
     return (
        <Container 
          type={pokemon.types[0].name}
          {...rest} 
        > 
                <ConteudoCodigo>
                     <Codigo type={pokemon.types[0].name}>{pokemon.code}</Codigo>
                </ConteudoCodigo>
                <ConteudoSvg>
                     {
                         retornaSvg(pokemon.name)
                     }
                </ConteudoSvg>
                <ConteudoNome type={pokemon.types[0].name}>
                    <Nome>{pokemon.name}</Nome>
                </ConteudoNome>
        </Container>
     )
}