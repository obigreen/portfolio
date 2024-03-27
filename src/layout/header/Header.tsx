import React from 'react';
import {DesctopMenu} from "./headerMenu/desctopMenu/DesctopMenu";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../styles/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {FixedLink} from "./headerMenu/fixedLinks/FixedLink";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles"


export const Header: React.FC = () => {
    // ВОТ ТУТ ОБЯЗАТЕЛЬНО ПОСМОТРЕТЬ И КОНСПЕКТИРОВАТЬ

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 801;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <FixedLink/>
            <Container>
                <FlexWrapper justify={'space-between'}>
                    <Logo/>
                    <FlexWrapper align={'center'} gap={'32px'}>
                        {width < breakpoint ? <MobileMenu/>
                            : <DesctopMenu/>}
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};




