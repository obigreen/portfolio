import React from 'react';
import {Container} from "../../../styles/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from "./Quote_Styles"

export const Quote: React.FC = () => {
    return (
        <S.Quote>
            <Container>
                <FlexWrapper justify={'center'}>
                    <S.StyledBlockquote>
                        <S.QuoteText>With great power comes great electricity bill</S.QuoteText>
                        <S.Author>- Dr. Who</S.Author>
                    </S.StyledBlockquote>
                </FlexWrapper>
            </Container>
        </S.Quote>
    );
};




