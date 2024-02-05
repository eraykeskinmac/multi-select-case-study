import { useState, useEffect } from "react";
import axios from "axios";
import { Character } from "../types/characterTypes";

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCharacters = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      setCharacters(response.data.results);
    } catch (err) {
      setError("An error occurred while fetching the characters");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return { characters, isLoading, error, refetchCharacters: fetchCharacters };
};
