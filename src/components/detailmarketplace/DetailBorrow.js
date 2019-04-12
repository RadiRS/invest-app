import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../../themes';

const DetailBorrow = props => {
  const { data } = props;

  return (
    <Container>
      <InfoWrapper>
        <LabelInfo>Nominal Pinjaman</LabelInfo>
        <TextInfo>Rp 5.000.000</TextInfo>
      </InfoWrapper>
      <InfoWrapper>
        <LabelInfo>Jenis Pinjaman</LabelInfo>
        <TextInfo>Invoice Financing</TextInfo>
      </InfoWrapper>
      <InfoWrapper>
        <LabelInfo>Skor Kredit</LabelInfo>
        <TextInfo>A</TextInfo>
      </InfoWrapper>
      <InfoWrapper>
        <LabelInfo>Bunga Efektif</LabelInfo>
        <TextInfo>15% p.a</TextInfo>
      </InfoWrapper>
      <InfoWrapper>
        <LabelInfo>Tenor</LabelInfo>
        <TextInfo>120 hari</TextInfo>
      </InfoWrapper>
      <InfoWrapper>
        <LabelInfo>Pengembalian Pokok</LabelInfo>
        <TextInfo>Angsuran Bulanan</TextInfo>
      </InfoWrapper>
      <InfoWrapper>
        <LabelInfo>Pengembalian Bunga</LabelInfo>
        <TextInfo>Angsuran Bulanan</TextInfo>
      </InfoWrapper>
      <InfoWrapper>
        <LabelInfo>Beragunan</LabelInfo>
        <TextInfo>Ya</TextInfo>
      </InfoWrapper>
      <InfoWrapper>
        <LabelInfo>Toleransi Keterlambatan</LabelInfo>
        <TextInfo>-</TextInfo>
      </InfoWrapper>
      <InfoWrapper>
        <LabelInfo>Asuransi</LabelInfo>
        <TextInfo>Tidak</TextInfo>
      </InfoWrapper>
      <InfoWrapper>
        <LabelInfo>Tenor Minimal</LabelInfo>
        <TextInfo>30 hari</TextInfo>
      </InfoWrapper>
    </Container>
  );
};

export default DetailBorrow;

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
