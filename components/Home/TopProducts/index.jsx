import { Box, CardContent, Container, Grid } from '@mui/material';
import Link from 'next/link';
import {
  Card,
  CardImage,
  CardImageBox,
  CardPrice,
  CardPricingSection,
  CardTitle,
  Section,
  SectionHeading,
  SectionTitle,
  StyledCardContent,
} from '../../Styles/Home';

import cardImg from '../../images/image 2.jpg';
import data from '../../../utils/data';

import { ButtonMaster } from '../../Styles/reusable';

export default function TopProducts() {
  return (
    <Section>
      <Container maxWidth='lg' sx={{ my: 5, py: 5 }}>
        <SectionHeading>
          <SectionTitle>TOP PRODUCTS</SectionTitle>
          <Link href={'/shop'}>View More</Link>
        </SectionHeading>
        <Grid container spacing={2}>
          {data.products.slice(0, 8).map((product) => (
            <Grid item md='3'>
              <Card>
                <CardImageBox>
                  <CardImage
                    src={cardImg.src}
                    alt='Card Image'
                    width={500}
                    height={500}
                    fill
                  />
                  <ButtonMaster
                    sx={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                    }}
                    off
                  >
                    10% Off
                  </ButtonMaster>
                </CardImageBox>
                <StyledCardContent>
                  <CardTitle variant={'h4'}>T-Shirt</CardTitle>
                  <CardPricingSection>
                    <CardPrice>$25.00</CardPrice>
                    <ButtonMaster btn='light'>+</ButtonMaster>
                  </CardPricingSection>
                </StyledCardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}