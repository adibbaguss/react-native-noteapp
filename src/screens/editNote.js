import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomButton from '../components/customButton';
import CustomTextInput from '../components/customTextInput';

const EditNote = ({ setCurrentPage, editNote, existingTitle, existingDesc }) => {
  const [title, setTitle] = useState(existingTitle); // Gunakan existingTitle untuk inisialisasi state judul
  const [desc, setDesc] = useState(existingDesc); // Gunakan existingDesc untuk inisialisasi state deskripsi

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Edit Note</Text>

      {/* Input untuk judul */}
      <CustomTextInput text={title} onChange={setTitle} label="Judul" numberOfLines={1} multiline={false} />

      {/* Input untuk deskripsi */}
      <CustomTextInput text={desc} onChange={setDesc} label="Deskripsi" multiline numberOfLines={4} textAlignVertical="top" />
      <View style={styles.spacerTop}></View>
      {/* Tombol untuk menyimpan perubahan */}
      <CustomButton
        backgroundColor="#247881"
        color="#fff"
        text="Perbarui"
        width="100%"
        onPress={() => {
          editNote(title, desc); // Panggil fungsi editNote dengan nilai judul dan deskripsi yang baru
          setCurrentPage('home'); // Kembali ke halaman home setelah mengedit
        }}
      />

      {/* Tombol untuk kembali ke halaman home tanpa melakukan perubahan */}
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
    marginTop: 20,
  },
});

export default EditNote;
