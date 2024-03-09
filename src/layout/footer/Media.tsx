import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/icon/Icon";

export const Media = () => {
    return (
        <StyledMedia>
            <h6>Media</h6>
            <FlexWrapper>
                <a href="">
                    <Icon iconId={'github'} width={'32'} height={'32'} wiewBox={'0 0 32 32'}/>
                </a>
                <a href="">
                    <Icon iconId={'figma'} width={'32'} height={'32'} wiewBox={'0 0 32 32'}/>
                </a>
                <a href="">
                    <Icon iconId={'discord'} width={'32'} height={'32'} wiewBox={'0 0 32 32'}/>
                </a>
            </FlexWrapper>

        </StyledMedia>
    );
};


const StyledMedia = styled.div`

`
