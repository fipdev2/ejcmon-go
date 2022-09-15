import api from "../api";

export default{
    async getPokedex(){
        try{
            const response = api.get(`/pokemons`);
            return response;
        } catch(e){
            console.log(e);
        }
    },

    async catchedPokemons(token: string){
        try{
            const response = api.get('/private/mypokemons', {
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            })
            return response;
        } catch(e){
            console.log(e);
        }
    },

    async capturePokemon(token: string, pokemonId: number){
        try{
            const response = api.post(`/private/mypokemons/${pokemonId}`, {}, {
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            })
            return response;
        }catch(e){
            console.log(e);
        }
    },

    async releasePokemon(token: string, pokemonId: number){
        try{
            const response = api.delete(`/private/mypokemons/${pokemonId}`, {
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            })
            return response;
        }catch(e){
            console.log(e);
        }
    },
}