import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../../themes';

const DetailHistory = props => {
  const { data } = props;

  return (
    <Container>
      <InfoWrapper>
        <LabelInfo>Dalam Penggalangan</LabelInfo>
        <TextInfo>32</TextInfo>
      </InfoWrapper>
      <InfoWrapper>
        <LabelInfo>Pinjaman Aktif</LabelInfo>
        <TextInfo>121</TextInfo>
      </InfoWrapper>
      <InfoWrapper>
        <LabelInfo>Nilai Total Pinjaman</LabelInfo>
        <TextInfo>Rp 605.000.000</TextInfo>
      </InfoWrapper>
      <InfoWrapper>
        <LabelInfo>Nilai Pinjaman Lunas</LabelInfo>
        <TextInfo>Rp 235.000.000</TextInfo>
      </InfoWrapper>
      <InfoWrapper>
        <LabelInfo>Pinjaman Dipercepat</LabelInfo>
        <TextInfo>0</TextInfo>
      </InfoWrapper>
      <InfoWrapper>
        <LabelInfo>Tepat Waktu</LabelInfo>
        <TextInfo>10</TextInfo>
      </InfoWrapper>
      <InfoWrapper>
        <LabelInfo>Terlambat</LabelInfo>
        <TextInfo>0</TextInfo>
      </InfoWrapper>
    </Container>
  );
};

export default DetailHistory;

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
  background-color: ${Colors.snow};
`;

const InfoWrapper = styled.View`
  width: 50%;
  margin-bottom: 20px;
`;

const LabelInfo = styled.Text`
  font-size: 18px;
  color: ${Colors.lightGray};
`;

const TextInfo = styled.Text`
  font-size: 20px;
`;
