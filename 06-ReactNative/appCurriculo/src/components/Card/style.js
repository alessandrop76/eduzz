import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    
    card:{
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 5,
        borderRadius: 5,
        height: 'auto',
        borderWidth: 1,
        borderColor: 'purple',
      },
      topoCard:{
        backgroundColor: 'rgba(130, 70, 140, 0.1)',
        width: '100%',
        height: 40,
        marginBottom:5,
      },
      bodyCard:{
        backgroundColor: 'rgba(130, 70, 140, 0.1)',
        width: '100%',
        height: 200,
      }, miniTitle:{
        fontSize: 14,
        color: '#664545',
        fontStyle: 'italic',
        fontWeight: 'bold',
      },
})

export default style;