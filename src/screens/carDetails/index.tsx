import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';

import speedSVG from '../../../assets/speed.svg';
import accelerationSVG from '../../../assets/acceleration.svg';
import forceSVG from '../../../assets/force.svg';
import gasolineSVG from '../../../assets/gasoline.svg';
import exchangeSVG from '../../../assets/exchange.svg';
import peopleSVG from '../../../assets/people.svg';



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
    About,
    Accessories
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

                <Accessories>
                    <Accessory name='380Km/h' icon={speedSVG} />
                    <Accessory name='3.2s' icon={accelerationSVG} />
                    <Accessory name='800 HP' icon={forceSVG} />
                    <Accessory name='Gasolina' icon={gasolineSVG} />
                    <Accessory name='Auto' icon={exchangeSVG} />
                    <Accessory name='2 pessoas' icon={peopleSVG} />
                </Accessories>

                <About>
                    Este é automovel desportivo. Surgiu o lendário
                    touro de lide indulto na praça Real Maestreza de Sevilla.
                    É um belíssimo carro para quem gosta de acelerar.
                </About>
            </Content>
        </Container>
    );
}