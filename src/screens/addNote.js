import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomButton from '../components/customButton';
import CustomTextInput from '../components/customTextInput';

// menambahkan function addNote sebagai sebuah prop
const AddNote = ({ setCurrentPage, addNote }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Tambahkan Note</Text>

      <CustomTextInput text={title} onChange={setTitle} label="Judul" placeholder="Judul" numberOfLines={1} multiline={false} />
      <CustomTextInput text={desc} onChange={setDesc} label="Deskripsi" placeholder="Deskripsi" multiline numberOfLines={4} textAlignVertical="top" />
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#247881"
          color="#fff"
          text="Simpan"
          width="100%"
          //menjalankan function addNote dan arahkan kembali ke layar Home
          onPress={() => {
            addNote(title, desc);
            setCurrentPage('home');
          }}
        />
      </View>

      <View>
        <CustomButton
          borderColor="#101010"
          borderWidth={1}
          backgroundColor="#ffffff"
          color="#101010"
          text="Kembali ke Home"
          width="100%"
          // kembali ke halaman home
          onPress={() => setCurrentPage('home')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#203239',
  },
  spacerTop: {
    marginTop: 30,
  },
});

export default AddNote;
