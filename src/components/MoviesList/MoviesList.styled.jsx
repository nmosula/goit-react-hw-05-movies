import styled from 'styled-components';
import { Link } from "react-router-dom"

export const List = styled.ul`
    list-style: square;
`

export const ListItem = styled.li`
    color: #3B3B7C;
    font-size: 18px;

    &:visited {
        color: #3B3B7C;
    }
    &:hover {
        color: #4AB51A;
    }
`

export const ListItemA = styled(Link)`
    color: #3B3B7C;
    text-decoration: none;

    &:visited {
        color: #3B3B7C;
    }

    &:hover {
        color: #4AB51A;
    }
`