import styled, { keyframes } from 'styled-components'
import native, {Text, Image} from 'react-native'

const slide = keyframes`
    0% {
        left: -100%
    }
    100% {
        left: 0%
    }
`

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 240px;
    height: 48px;
    color: gray;
    border: gray 1px solid;
    border-radius: 40px;
    margin: 16px;
    :hover{
        color: #4895ef;
        border: #4895ef 1px solid;
        & input{
            color: #4895ef;
        }
    }
`

export const SearchInput = styled.input`
    outline: none;
    border: none;
    color: gray;
    background: none;
    :focus{
        color: #4895ef;
    }
`

export const ChampionImageContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    box-shadow: 10px 10px 89px 32px rgba(0,0,0,0.5) inset;
`

