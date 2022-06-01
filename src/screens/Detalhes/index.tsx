import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { useEffect } from "react";
import {  View } from "react-native";
import { PokemonDTO } from "../../dtos/PokemonDTO";
import retornaSvg from "../../utils/retornaSvg";
import { BotaoHeader, Codigo, Container, Conteudo, ConteudoSvg, ConteudoTitulo, Header, LabelDestaque, Nome, Sobre, Tipos } from "./styles";
import {Feather , MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import TypeCard from "../../components/TypeCard";
import AboutData from "../../components/AboutData";
import BaseStats from "../../components/BaseStats";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FavoritoDTO } from "../../dtos/FavoritoDTO";
import { useAuth } from "../../hooks/auth";


interface ParametrosRota {
    pokemon : PokemonDTO
}

const FAVORITOS_KEY = "@pokedex:favoritos";

export default function Detalhes(){

    const [pokemon , setPokemon] = useState<PokemonDTO>();
    const { usuario } = useAuth()
    const theme = useTheme();
    const route = useRoute();

    useEffect(() => {
        const parametros = route.params as ParametrosRota;
        setPokemon(parametros.pokemon);
    }, [])

    const navigation = useNavigation();

    function voltar(){
        navigation.goBack();
    }

    async function addFavoritos( pokemon : PokemonDTO){
       const pokemonString = JSON.stringify(pokemon);
       const favoritosStorage = await AsyncStorage.getItem(FAVORITOS_KEY);
     
       const favoritosParse = favoritosStorage ?JSON.parse(favoritosStorage) as FavoritoDTO[] : [];
       favoritosParse.push({
                id  : Math.random(),
                pokemon,
                usuario : usuario!
        });

       await AsyncStorage.setItem(FAVORITOS_KEY , JSON.stringify(favoritosParse))
           
    }

    if(!pokemon) return <View/>

    return(
        <Container type={pokemon.types[0].name}>
                <Header >
                    <ConteudoTitulo>
                        <BotaoHeader
                            onPress={() => voltar()}
                        >
                                <Feather 
                                    name="arrow-left"
                                    size={18}
                                    color={theme.white}
                                />
                        </BotaoHeader>
                        <Nome>{pokemon.name}</Nome>
                        <Codigo>{pokemon.code}</Codigo>
                    </ConteudoTitulo>

                    <BotaoHeader onPress={() => addFavoritos(pokemon) } >
                         <MaterialCommunityIcons 
                            name="heart"
                            size={22}
                            color={theme.white}
                         />
                    </BotaoHeader>
                </Header>
                <Conteudo>
                      <ConteudoSvg>
                            {retornaSvg(pokemon.name,200,200)}
                      </ConteudoSvg>
                      <Tipos>
                           {
                               pokemon.types.map((pokemon) => 
                              ( <TypeCard key={pokemon.id} tipoPokemon={pokemon} />))
                           }
                      </Tipos>
                      <LabelDestaque
                        type={pokemon.types[0].name}
                      >
                          About
                  
                      </LabelDestaque>
                      <AboutData  
                        weight={pokemon.about.weight}  
                        height={pokemon.about.height}
                        moves={pokemon.moves}  
                      
                      />
                      <Sobre>
                          {pokemon.about.description}
                      </Sobre>
                      <LabelDestaque
                        type={pokemon.types[0].name}
                      >
                          Base Stats                
                      </LabelDestaque>
                     <BaseStats pokemonType={pokemon.types[0].name} stats={pokemon.base_stats} />

                </Conteudo>
        </Container>
        
    )
}