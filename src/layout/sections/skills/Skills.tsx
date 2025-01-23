import React from 'react';
import { Container } from "../../../styles/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import {S} from "./Skills_Styles";
import { ImageSlider } from "./slider/ImageSlider";
import { Icon } from "../../../components/icon/Icon";

import { Assistant } from "./assistant/Assistant";
import {SectionTitle} from "../../../components/SectionTitle";
import {skillsData} from "../../../data/skillsData";

export const Skills = () => {

    return (
        <S.Skill id={'skills'}>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <S.WrappWrapp>
                        {[skillsData.technologies, skillsData.tools, skillsData.socials].map((items, index) => (
                            <S.Wrap key={index}>
                                <ImageSlider>
                                    {items.map((item, idx) => (
                                        <S.IconLink key={idx} href={item.href} target={'_blank'}>
                                            {item.iconId ? (
                                                <Icon iconId={item.iconId} width={'60'} height={'60'} viewBox={'0 0 32 32'} />
                                            ) : (
                                                <S.Img src={item.imgSrc} alt="" />
                                            )}
                                        </S.IconLink>
                                    ))}
                                </ImageSlider>
                            </S.Wrap>
                        ))}
                    </S.WrappWrapp>
                    <Assistant />
                </FlexWrapper>
            </Container>
        </S.Skill>
    );
};










