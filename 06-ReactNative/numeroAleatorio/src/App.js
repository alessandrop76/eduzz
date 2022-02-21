import React, {useState} from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {

  const [numero, setNumero]= useState(10)

  function handleNumero(){
      const novoNumero = Math.floor(Math.random()* 6);
      setNumero(novoNumero)
    }
   
  return (
  <SafeAreaView style={style.container}>
      <Text style={style.numero}>{numero}</Text>
      <TouchableOpacity style={style.botao} onPress={handleNumero}><Text style={style.gerarNbr}>Gerar Número</Text></TouchableOpacity>
   </SafeAreaView>
   );
}
   const style = StyleSheet.create({
    container: {
        backgroundColor: '#8bc540',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'},
        numero:{
            fontSize: 38,
            color: 'white',
            fontWeight: 'bold',
        },
        botao:{
            alignItems: 'center',
            justifyContent: 'center',
            width: '98%',
            height: '8%',
            borderRadius: 40,
            backgroundColor: 'rgba(98,95, 95, 0.5)',
    },
        gerarNbr:{
            fontSize: 28,
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: 'aliceblue',
        }
   
});

export default App;