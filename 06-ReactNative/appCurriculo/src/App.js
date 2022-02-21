import React from 'react';
import {Text, View,StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import foto from './assets/draIcon.png';
import Icon from 'react-native-vector-icons/Entypo';
const myIcon = <Icon name="phone" size={30} color="#900" />;

import Card from './components/Card';

const APP = () => {

  function handleRedeSocial(rede_social){
    switch(rede_social){
      case 'linkedin':
        Alert.alert("Mais sobre mim", "https://www.linkedin.com/in/alessandro-pereira-1b140a57/ ")
        break
      case 'github':
        Alert.alert("Mais sobre mim","https://www.github.com/alessandrop76 ")
        break
    }
  }
    return(
      <>     
      <View style={style.page}>
       <View style={style.avatar}>
         <Image source={foto} style={style.fotoTop} />
           <Text style={style.name}>Name</Text>
           <Text style={style.surname}>Surname</Text>
       </View>     
       <View style={style.socialMidias}>
         <TouchableOpacity onPress={() => handleRedeSocial('github')}>
         <Icon name="facebook" size={30} />
         </TouchableOpacity>
         <TouchableOpacity onPress={() => handleRedeSocial('linkedin') }>
           <Icon name='heart' size={30} />
           </TouchableOpacity>
        </View>
      <Card titulo="Current Experience">
        <View>
          <Text>vpax solutions</Text>  
        </View>    
        <View>
          <Text></Text>
          <Text></Text>
          <Text>Estácio de Sá - Analysis and Systems Development</Text>
          <Text>DIO - Python FullStack Developer</Text>
          <Text>Digital House Brasil - FullStack Java Developer</Text>
          <Text>Udemy - Node JS Developer</Text>    
        </View>
      </Card>     
    </View>
    </>
    
    )
}

const style = StyleSheet.create({
  page:{
    backgroundColor: 'rgba(100,70,140,0.2)',
    flex:1,
  },
  avatar:{
    paddingTop: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  fotoTop:{
    width: 80,
    height: 80,
  },
 
  container_cabecalho:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name:{
    fontSize: 18,
  },
  surname:{
    fontSize: 15,
    marginBottom: 10,
  },
  socialMidias: {
    alignSelf: 'center',
    width: '90%',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    flexDirection: 'row',
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: 'purple'
  }
})
export default APP;