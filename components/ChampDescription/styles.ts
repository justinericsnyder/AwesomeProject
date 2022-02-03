import styled, { keyframes } from 'styled-components'

const expand = keyframes`
    0%{
        width: 0%;
        height: 0px;
    }
    100%{
        width: 100%;
        height: 0px;
    }
`

const contract = keyframes`
    0%{
        width: 100%;
        height: 0px;
    }
    100%{
        width: 0%;
        height: 0px;
    }
`

const unHide = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`

export const DescriptionContainer = styled.div`
    width: 640px;
    margin-left: 320px;
    margin-top: 160px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: justify;
    & div{
            animation: ${contract} 0.1s linear both;
        }  
    :hover{
        & div{
            animation: ${expand} 0.1s linear both;
        }  
    }
`

export const ChampionDescription = styled.p`
    font-size: 24px;
    color: #112A46;
    font-weight: bold;
    animation: ${unHide} 2s linear both
`

export const DescriptionInnerBar = styled.div`
    border-top: #112A46 2px solid;
    width: 0%;
    height: 0px;
`