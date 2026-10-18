import React from 'react';
import {Container} from "../../styles/Container";
import {S} from "./Footer_Styles"
import {skillsData} from "../../data/skillsData";
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <S.Footer>
            <Container>
                <S.FooterSocials>
                    {skillsData.socials.map((item, index) => (
                        <S.FooterSocialsLink key={index} href={item.href} target="_blank">
                            {item.iconId ? (
                                <Icon iconId={item.iconId} width={'40'} height={'40'} viewBox={'0 0 32 32'} />
                            ) : (
                                <S.FooterSocialsIcons src={item.imgSrc} alt="social-icon" />
                            )}
                        </S.FooterSocialsLink>
                    ))}
                </S.FooterSocials>
            </Container>
        </S.Footer>
    );
};

