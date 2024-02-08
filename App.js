
import firebase from './FireBaseConnect'
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Keyboard
} from 'react-native';

 

export default function App() {


 

   const vendedor = 12
   const [nome, setNome] = useState('')
   const [cidade, setCidade] = useState('')
   

 

  async function Botaofirebase(){
    if(!nome || !cidade){
      alert('um ou mais campos vazios!')
      return
    }
    let usuarios = await firebase.database().ref('vendedores').child(vendedor)
    let chave = usuarios.push().key
 
    usuarios.child(chave).set({
      nome: nome,
      cidade: cidade,
     
    })
    alert('CADASTRO EFEITUADO COM SUCESSO!')
    Keyboard.dismiss()
  }



  return (
    <View style={styles.container}>
     <StatusBar backgroundColor='#384030' barStyle={'default'} translucent={false} />
     <Text style={styles.titulo}>Faça seu Login a qui com fire base</Text>

     <TextInput style={styles.input}
      placeholderTextColor='#A3A3A3'
      placeholder='Digite seu nome'
      value={nome}
      onChangeText={setNome}
     />
      <TextInput style={styles.input}
       placeholderTextColor='#A3A3A3'
      placeholder='Digite sua cidade'
      value={cidade}
      onChangeText={setCidade}
      />
      
     <TouchableOpacity onPress={Botaofirebase}>
        <Text style={styles.botaoFire}>Enviar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#da9c3c',
    borderRadius: 15,
    backgroundColor: 'transparent',
    padding: 17,
    color: '#da9c3c',
    width: 370,
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 20
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 30,
    textAlign: 'center',
    marginBottom: 20
  },
  botaoFire: {
    fontWeight: 'bold',
    fontSize: 25,
    borderRadius: 10,
    padding: 15,
    width: 370,
    backgroundColor: '#a32c28',
    color: '#17181f',
    textAlign: 'center'
  }
});
