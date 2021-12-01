import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  Linking,
  Platform,
  View,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';

const App = () => {
  const [NomorHp, setNomorHp] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./src/img/logo.png')} style={styles.logo} />
        <Text style={styles.titleHeader}>
          Kirim Pesan WA Tanpa Simpan Nomor
        </Text>
        <View style={styles.content}>
          <Text style={styles.titleContent}>Masukkan No. Hp</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Masukkan nomor Hp"
            onChangeText={NomorHp => setNomorHp(NomorHp)}
            defaultValue={NomorHp}
          />
          <TouchableOpacity
            style={styles.CTA}
            onPress={() => {
              Linking.openURL(
                `https://api.whatsapp.com/send?phone=+62${NomorHp}`,
              );
            }}>
            <Text style={styles.textCTA}>Kirim Pesan</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.textFooter}>Build by</Text>
        <Text
          style={styles.spanFooter}
          onPress={() => {
            Linking.openURL(`https://muhamadbahaudin.com`);
          }}>
          Muhamad Baha Udin
        </Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#f6f8fe',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginHorizontal: 20,
    paddingHorizontal: 16,
    paddingVertical: 28,
    marginTop: 40,
    backgroundColor: 'white',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 70,
    alignSelf: 'center',
  },
  titleHeader: {
    textAlign: 'center',
    width: '100%',
    marginTop: 10,
    fontSize: 18,
    fontWeight: '500',
    color: '#34364A',
  },
  content: {
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContent: {
    textAlign: 'center',
    width: '100%',
    fontSize: 16,
    fontWeight: '500',
    color: '#34364A',
    opacity: 0.8,
  },
  input: {
    marginTop: 8,
    borderRadius: 4,
    borderWidth: 0.2,
    borderColor: 'grey',
    color: 'black',
    paddingHorizontal: 16,
    fontSize: 16,
    width: 280,
  },
  CTA: {
    marginTop: '5%',
    marginHorizontal: 16,
    paddingHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: '#2447F9',
    borderRadius: 8,
    width: 280,
  },
  textCTA: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  footer: {
    marginTop: '30%',
  },
  textFooter: {
    textAlign: 'center',
    color: '#34364A',
    fontSize: 13,
    fontWeight: '400',
  },
  spanFooter: {
    color: '#34364A',
    fontSize: 15,
    fontWeight: '500',
    marginTop: 6,
  },
});
