import { useEffect, useState } from "react";

import { SimpleGrid, Text } from "@chakra-ui/react"

import apiClient from "../services/api-client";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse  {
    count: number;
    results: Game[];

}

const GameGrid = () => {
    
    
    const {games, error, isLoading} = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5}} padding='10px' spacing={10}>
                {isLoading && skeletons.map(skeleton => (
                    <GameCardContainer>
                        <GameCardSkeleton key={skeleton} />
                    </GameCardContainer>
                ))}
                {games.map(game => (
                    <GameCardContainer>
                        <GameCard key={game.id} game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    )


}

export default GameGrid