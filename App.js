import React, { useState } from 'react';
import {
  Button,
  FlatList,
  ScrollView, 
  StyleSheet, 
  Text, 
  TextInput, 
  View 
} from 'react-native';

export default function App() {
  const [lembrete, setLembrete] = useState ('')
  const [lembretes, setLembretes] = useState([])
  const [contador, setContador] = useState(0)

  const capturarLembrete = (lembrete) => {
    setLembrete(lembrete)
  }

  const adicionarLembrete = () => {
    setLembretes (lembretes => {
      setContador (contador + 1)
      let aux = [{key: contador.toString(), value: lembrete}, ...lembretes]
      setLembrete('')
      console.log (aux)
      return aux
    })
  }

  return (
    <View
      style={styles.telaPrincipalView}>
      <View>
        {/* usuário irá inserir seus lembretes aqui */}
        <TextInput 
          placeholder="Lembrar..."
          style={styles.lembreteTextInput}
          onChangeText={capturarLembrete}
          value={lembrete}
        />
        <Button 
          title="Adicionar lembrete"
          onPress={adicionarLembrete}
        />
      </View>
      <View
        style={{marginTop: 8}}>
        {/* os lembretes serão exibidos aqui */}
        <FlatList 
          data={lembretes}
          renderItem={(lembrete) => (
            <View 
              style={styles.itemNaLista}>
              <Text>{lembrete.item.value}</Text>
            </View>
          )}
        />

        {/* <ScrollView>
          {
            lembretes.map ((lembrete, indice) => (
              <View 
                key={indice}
                style={styles.itemNaLista}>
                <Text>{lembrete}</Text>
              </View>
            ))
          }
        </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 40
  },
  lembreteTextInput :{
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    marginBottom: 8,
    padding: 8,
    textAlign: 'center'
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#CCE',
    borderColor: '#CCC',
    marginBottom: 8,
    borderRadius: 8
  }
});
