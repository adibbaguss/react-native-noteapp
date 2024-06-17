import React from 'react';
import { FlatList, StyleSheet, View, Text, SafeAreaView, StatusBar, Alert } from 'react-native';
import CustomButton from '../components/customButton';

const NoteCard = ({ item, setCurrentPage, deleteNote, selectNote }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text style={styles.cardDesc}>{item.desc}</Text>
    <View style={styles.buttons}>
      {/* tombol edit */}
      <CustomButton
        backgroundColor="transparant"
        color="#247881"
        text="Ubah"
        fontSize={12}
        width={100}
        onPress={() => {
          selectNote(item);
          setCurrentPage('edit');
        }}
        borderWidth={1} // Lebar border 1 pixel
        borderColor="#247881" // Warna border
      />

      {/* tombol hapus */}
      <CustomButton
        color="#D82148"
        backgroundColor="transparant"
        text="Hapus"
        fontSize={12}
        width={100}
        onPress={() => {
          // Konfirmasi penghapusan
          Alert.alert(
            'Konfirmasi',
            'Anda yakin ingin menghapus catatan ini?',
            [
              { text: 'Batal', style: 'cancel' },
              {
                text: 'Hapus',
                style: 'destructive',
                onPress: () => deleteNote(item.id), // Panggil fungsi deleteNote dengan ID catatan
              },
            ],
            { cancelable: true }
          );
        }}
        borderWidth={1} // Lebar border 1 pixel
        borderColor="#D82148" // Warna border
      />
    </View>
  </View>
);

const Home = ({ noteList, setCurrentPage, deleteNote, selectNote }) => (
  <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor="#000" />
    <CustomButton
      backgroundColor="#247881"
      color="#fff"
      text="Tambahkan Note"
      width="100%"
      onPress={() => {
        setCurrentPage('add');
      }}
    />
    <FlatList
      showsVerticalScrollIndicator={false}
      data={noteList}
      // render
      renderItem={({ item }) => <NoteCard item={item} setCurrentPage={setCurrentPage} deleteNote={deleteNote} selectNote={selectNote} />}
      keyExtractor={(item) => item.id.toString()} // Memastikan id diubah menjadi string
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
    flex: 1,
  },
  card: {
    padding: 15,
    marginVertical: 15,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
  },
  cardTitle: {
    fontWeight: '600',
    color: '#203239',
    fontSize: 16,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#dfdfdf',
  },
  cardDesc: {
    marginVertical: 5,
  },

  buttons: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
export default Home;
