import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import { 
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    About
} from './styles';

export function CarDetails(){

    return(
        <Container>
            <Header>
                <BackButton onPress={() => {}} />
            </Header>

            <CarImages>
                <ImageSlider 
                    imagesUrl={['https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png']} 
                />
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>Lamborghini</Brand>
                        <Name>Huracan</Name>
                    </Description>

                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 580,00</Price>
                    </Rent>
                </Details>

                <About>
                    Este é automovel desportivo. Surgiu o lendário
                    touro de lide indulto na praça Real Maestreza de Sevilla.
                    É um belíssimo carro para quem gosta de acelerar.
                </About>
            </Content>
        </Container>
    );
}