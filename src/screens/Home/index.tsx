import React, { useEffect, useState } from "react";
import { BotaoOrdenacao, Container, ConteudoTitulo, Header, InputTexto, Titulo } from "./styles";
import Pokebola from "../../assets/icons/pokeball.svg"
import SortAsc from '../../assets/icons/sortasc.svg';
import SortDesc from '../../assets/icons/sortdesc.svg';
import SmallCard from "../../components/SmallCard";
import { api } from "../../services/api";
import { PokemonDTO } from "../../dtos/PokemonDTO";
import { FlatList, TouchableWithoutFeedback , Keyboard } from "react-native";


export default function Home(){

    const [decrescente , setDecrescente ] = useState<boolean>(false);
    const [nomeFiltro , setNomeFiltro ] = useState('');
    const [pokemons , setPokemons ] = useState<PokemonDTO[]>([]);
    const [pokemonsFiltro , setPokemonsFiltro ] = useState<PokemonDTO[]>([]);

    function handleFiltro(){
         setDecrescente(!decrescente);
    };

    function alteraNomeFiltro(nome : string){
        console.log(nome);
        setNomeFiltro(nome);
        const filtrados = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(nome.toLowerCase()));
        setPokemonsFiltro(filtrados);
        console.log(filtrados)
    }

    async function getPokemons(){

        try {
            const filtro = decrescente ? '?_sort=name&_order=desc' : '?_sort=name&_order=asc';
    
            const resposta = await api.get<PokemonDTO[]>(`/pokemons${filtro}`);
            console.log(resposta.data)
            if(resposta.data && resposta.data.length > 0){
                setPokemons(resposta.data);
                setPokemonsFiltro(resposta.data);
            }

        } catch (error) {
            console.log(error)
        }
        
    };

    useEffect(() => {
        getPokemons()
    },[decrescente])

    return (  
        <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}
        >
            
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
                        onChangeText={alteraNomeFiltro}
                        placeholder="Procurar"
                        keyboardAppearance="dark"
                    />

                    <FlatList 
                        data={pokemonsFiltro}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={3}
                        contentContainerStyle={
                            {
                                alignItems : 'center',
                                justifyContent : 'center',
                            }
                        }
                        style = {
                            {
                                width: '100%'
                            }
                        }
                        renderItem={({item}) => (<SmallCard pokemon={item} />)}
                    />

            </Container>
        </TouchableWithoutFeedback>
    )
}