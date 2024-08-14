import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {AbsolutWrapp} from "../../../../components/absolute/AbsolutWrapp";
import {Icon} from "../../../../components/icon/Icon";
import {AbsoluteBox} from "../../../../components/absolute/AbsoluteBox";

export const Assistant = () => {
    return (
        <AssistantWrapp>

            <AbsolutWrapp top={'50px'} left={'-60px'} index={'-1'}>
                <AbsoluteBox bottom={'calc(50% - 0px)'} left={'-45px'} width={'50px'} height={'4px'}/>
                <Icon iconId={'chipMain'} width={'62'} height={'62'} viewBox={'0 0 32 32'}/>
            </AbsolutWrapp>


            <AbsolutWrapp top={'calc(50% - 30px)'} left={'-60px'} index={'-1'}>
                <AbsoluteBox bottom={'calc(50% - 0px)'} left={'-45px'} width={'50px'} height={'4px'}/>
                <Icon iconId={'chipMain'} width={'62'} height={'62'} viewBox={'0 0 32 32'}/>
            </AbsolutWrapp>

            <AbsolutWrapp bottom={'43px'} left={'-60px'} index={'-1'}>
                <AbsoluteBox bottom={'calc(50% - 0px)'} left={'-45px'} width={'50px'} height={'4px'}/>
                <Icon iconId={'chipMain'} width={'62'} height={'62'} viewBox={'0 0 32 32'}/>
            </AbsolutWrapp>

        </AssistantWrapp>
    );
};

const AssistantWrapp = styled.div`
    position: relative;
    max-width: 400px;
    width: 100%;
    height: 400px;
    background-color: ${theme.color.backround};
    box-shadow: inset 0 0 3px 0 rgb(0 0 0 / 11%), 3px 4px 11px rgba(0, 0, 0, 0.1);

`
