import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../../themes';

const DetailBorrower = props => {
  const { data } = props;

  return (
    <Container>
      <InfoWrapper>
        <LabelInfo>Peminjam</LabelInfo>
        <TextInfo>PT MR</TextInfo>
      </InfoWrapper>
      <InfoWrapper>
        <LabelInfo>Bentuk Usaha</LabelInfo>
        <TextInfo>CV</TextInfo>
      </InfoWrapper>
      <InfoWrapper>
        <LabelInfo>Industri</LabelInfo>
        <TextInfo>Agen Pulsa</TextInfo>
      </InfoWrapper>
      <InfoWrapper>
        <LabelInfo>Tahun Berdiri</LabelInfo>
        <TextInfo>1989</TextInfo>
      </InfoWrapper>
      <InfoWrapper>
        <LabelInfo>Provinsi</LabelInfo>
        <TextInfo>Bali</TextInfo>
      </InfoWrapper>
      <InfoWrapper>
        <LabelInfo>Jumlah Pegawai</LabelInfo>
        <TextInfo>201 - 500</TextInfo>
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
        <LabelInfo>Statu Lokasi Usaha</LabelInfo>
        <TextInfo>Milik Sendiri</TextInfo>
      </InfoWrapper>
    </Container>
  );
};

export default DetailBorrower;

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
