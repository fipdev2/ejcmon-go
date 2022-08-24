import * as React from 'react';
import { GoSearch } from 'react-icons/go'
import { Search, SearchWrapper } from './style';
import { globalStyles } from '../../global/globalStyles';

type SearchBarInfo = {
    searchValue: (event : any) => void;
}

export function SearchBar({searchValue} : SearchBarInfo) {

    return(
        <SearchWrapper>
            <Search placeholder="Buscar Pokémon" onChange={(event) => searchValue(event)}></Search>
            <GoSearch style={{ color: globalStyles.colors.primaryPurple, fontSize: "32px" }} />
        </SearchWrapper>
    )
}
