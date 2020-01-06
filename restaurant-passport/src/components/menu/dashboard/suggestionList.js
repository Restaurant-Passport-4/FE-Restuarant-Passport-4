import React from 'react';
import SuggestionCard from './suggestionCard';
import styled from 'styled-components';

const SuggestionList = () => {

    return(
        <CardCont>
            {/* {TBD.map(item => {
                    return(
                        <SuggestionCard key={item.id} />
                    )
            })} */}
        </CardCont>

    );
};

export default SuggestionList;

const CardCont = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;