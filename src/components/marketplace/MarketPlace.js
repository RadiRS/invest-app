import React from 'react';
import styled from 'styled-components/native';
import { Colors, Images } from '../../themes';
import Icon from '../icons/CustomIcon';
import ProgressBar from '../common/ProgressBar';

const MarketPlace = () => (
  <Container>
    <Cover>
      <Image source={Images.cover} resizeMode="center" />
      <InfoWrapper>
        <InfoText>A</InfoText>
        <InfoDateWrapper>
          <Icon name="clock" color={Colors.lightRed} size={22} />
          <InfoDate>11 hari lagi</InfoDate>
        </InfoDateWrapper>
      </InfoWrapper>
    </Cover>

    <Content>
      <MarketName>Microsoft Office 2019</MarketName>
      <ProgressBar progress={0.4} style={{ marginTop: 10 }} />
      <ProgressInfoWrapper>
        <Icon name="verified-outline" size={22} color={Colors.lightGreen} />
        <ProgressInfoText>63 % Terkumpul - Rp 3.600.000</ProgressInfoText>
      </ProgressInfoWrapper>
      <Border />
      <DetailInfoWrapper>
        <DetailInfo>
          <LabelInfo>Nilai Pinjaman</LabelInfo>
          <TextInfo>Rp. 300.000.000</TextInfo>
        </DetailInfo>
        <DetailInfo>
          <LabelInfo>Nilai Jenis Pinjaman</LabelInfo>
          <TextInfo>Invoice Financing</TextInfo>
        </DetailInfo>
        <DetailInfo>
          <LabelInfo>Tenor</LabelInfo>
          <TextInfo>120 hari</TextInfo>
        </DetailInfo>
        <DetailInfo>
          <LabelInfo>Bunga Efektif</LabelInfo>
          <TextInfo>15% p.a</TextInfo>
        </DetailInfo>
      </DetailInfoWrapper>
    </Content>
  </Container>
);

export default MarketPlace;

const Container = styled.View`
  flex: 1;
  margin: 0 10px;
  margin-bottom: 20px;
  background-color: ${Colors.snow};
  border-radius: 5px;
`;

const Cover = styled.View`
  padding: 20px;
  height: 200px;
  overflow: hidden;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const Image = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const InfoWrapper = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 20;
  left: 20;
  align-items: center;
`;

const InfoText = styled.Text`
  padding: 5px 10px;
  font-size: 24px;
  color: ${Colors.snow};
  background-color: ${Colors.orange};
  border-radius: 5px;
  margin-right: 10px;
`;

const InfoDateWrapper = styled.View`
  flex-direction: row;
  background-color: ${Colors.background};
  padding: 5px 10px;
  border-radius: 5px;
  align-items: center;
`;

const InfoDate = styled.Text`
  font-size: 24px;
  margin-left: 10px;
`;

const Content = styled.View`
  background-color: ${Colors.snow};
  padding: 20px;
  padding-bottom: 0%;
`;

const MarketName = styled.Text`
  font-size: 24px;
  color: ${Colors.primary};
`;

const ProgressInfoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const ProgressInfoText = styled.Text`
  font-size: 22px;
  margin-left: 10px;
`;

const Border = styled.View`
  height: 2px;
  background-color: ${Colors.background};
  margin: 20px 0;
`;

const DetailInfoWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

const DetailInfo = styled.View`
  width: 50%;
  margin-bottom: 20px;
`;

const LabelInfo = styled.Text`
  font-size: 14px;
  color: ${Colors.lightGray};
`;

const TextInfo = styled.Text`
  font-size: 20px;
`;
