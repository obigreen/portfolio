import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {SectionText} from "../../../../components/SectionText";
import {Icon} from "../../../../components/icon/Icon";

import {S} from "../Contacts_Styles"

export const Contact: React.FC = () => {
    return (
        <S.Contact>
            <S.Title>Message me here</S.Title>
            <FlexWrapper direction={'column'}>
                <FlexWrapper align={'center'} gap={'8px'}>
                    <Icon iconId={'discord'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/>
                    <SectionText>!Elias#3519</SectionText>
                </FlexWrapper>
                <FlexWrapper align={'center'} gap={'8px'}>
                    <Icon iconId={'mail'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/>
                    <SectionText>elias@elias.me</SectionText>
                </FlexWrapper>
            </FlexWrapper>
        </S.Contact>
    );
};


