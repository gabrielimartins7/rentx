import React from 'react';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

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
    Accessories,
    Footer,
    RentalPeriod,
    CalendarIcon,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrince,
    RentalPriceLabel,
    RentalPriceDetails,
    RentalPriceQuota,
    RentalPriceTotal,
} from './styles';

export function SchedulingDetails(){
    const theme = useTheme();

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

                <RentalPeriod>
                    <CalendarIcon>
                        <Feather 
                            name='calendar'
                            size={RFValue(24)}
                            color={theme.colors.shape}
                        />
                    </CalendarIcon>

                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>15/03/2023</DateValue>
                    </DateInfo>

                    <Feather 
                        name='chevron-right'
                        size={RFValue(24)}
                        color={theme.colors.text}
                    />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue>18/03/2023</DateValue>
                    </DateInfo>
                </RentalPeriod>

                <RentalPrince>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
                        <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrince>
            </Content>

            <Footer>
                <Button title='Alugar agora' />
            </Footer>
        </Container>
    );
}