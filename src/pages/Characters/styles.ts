import { url } from 'inspector';
import styled from 'styled-components';

export const Container = styled.main`

    

`;

export const CardList = styled.div``;

const urlImg = (props: img) => `${props.img.path}`


export const Card = styled.div`
    background: #f1f1f1;
    height: 450px;
    width: 300px;
    margin: 10px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0. 0.3);




div#img{
    heigth: 400px;
    width: 100%;
    background: url(${urlImg}) no-repeat center;
    background-size: cover;
}
;