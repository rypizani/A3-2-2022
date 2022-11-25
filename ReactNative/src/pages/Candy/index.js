import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Platform,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";
import SwipeButton from "rn-swipe-button";
import React, { useState } from "react";
import { useBottomModal, BottomModal } from "react-native-lightning-modal";

import moeda from "../../../assets/moeda.png";

const statusBarHeight = StatusBar.currentHeight;

export default function Candy() {
 
  const [doce, setDoce] = useState("");
  const [resultado, setResultado] = useState(0);
  const { dismiss, show, modalProps } = useBottomModal();

  function reset(){
    setDoce(0)
    setResultado(0)
  }
  function resetmodal(){
    setDoce(0)
    setResultado(0)
    dismiss()
  }

  return (
    
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://media1.giphy.com/media/MJkPUQgZZHZ5jYHwlF/giphy.gif?cid=ecf05e47enftmpzze1f9ymi6lkpu402lctffoaupr6fd8t1m&rid=giphy.gif&ct=g",
        }}
        style={styles.imageBackground}
      />
        <View style={styles.viewvisor}>

<Text style={styles.text}>Dinheiro Inserido</Text>

<Text style={styles.text}>Valor do Doce </Text>
</View>

        <View style={styles.viewvisor}>
      <TextInput style={styles.visor} value={String(resultado)}></TextInput>

      <TextInput style={styles.visor} value={String(doce)}></TextInput>
      </View>


      <View style={styles.swipe}>
        <SwipeButton
          disabled={false}
          swipeSuccessThreshold={70}
          height={55}
          width={330}
          title="Inserir 1 Reais"
          onSwipeSuccess={() => {
            if (resultado + 1 <= 10) {
              setResultado(resultado + 1);
            } else {
              Alert.alert(
                "Dinheiro Não Inserido",
                "Esta Maquina tem o valor maximo de 10 Reais!"
              );
            }
          }}
          thumbIconImageSource={moeda}
          railBackgroundColor={"#c4c4c4"}
          railFillBackgroundColor={"#fad107"}
          railBorderColor={"#fad107"}
          thumbIconBorderColor={"#fad107"}
          railFillBorderColor={"#fad107"}
          shouldResetAfterSuccess={true}
          titleColor={"#000"}
        />

        <SwipeButton
          disabled={false}
          swipeSuccessThreshold={70}
          height={55}
          width={330}
          title="Inserir 2 Reais"
          onSwipeSuccess={() => {
            if (resultado + 2 <= 10) {
              setResultado(resultado + 2);
            } else {
              Alert.alert(
                "Dinheiro Não Inserido",
                "Esta Maquina tem o valor maximo de 10 Reais!"
              );
            }
          }}
          thumbIconImageSource={moeda}
          railBackgroundColor={"#c4c4c4"}
          railFillBackgroundColor={"#fad107"}
          railBorderColor={"#fad107"}
          thumbIconBorderColor={"#fad107"}
          railFillBorderColor={"#fad107"}
          shouldResetAfterSuccess={true}
          titleColor={"#000"}
        />

        <SwipeButton
          disabled={false}
          swipeSuccessThreshold={70}
          height={55}
          width={330}
          title="Inserir 5 Reais"
          onSwipeSuccess={() => {
            if (resultado + 5 <= 10) {
              setResultado(resultado + 5);
            } else {
              Alert.alert(
                "Dinheiro Não Inserido",
                "Esta Maquina tem o valor maximo de 10 Reais!"
              );
              console.log("valor  superir a 10");
            }
          }}
          thumbIconImageSource={moeda}
          railBackgroundColor={"#c4c4c4"}
          railFillBackgroundColor={"#fad107"}
          railBorderColor={"#fad107"}
          thumbIconBorderColor={"#fad107"}
          railFillBorderColor={"#fad107"}
          shouldResetAfterSuccess={true}
          titleColor={"#000"}
        />
      </View>

      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => {
          if(resultado >=6){
            setDoce("6")}
            else{
              Alert.alert(
                "Dinheiro Insuficiente",
                "Esta Maquina precisa de uma valor maior ou igual ao doce selecionado"
              );
            }
        }  
            }>
        <Image
          source={require("../../../assets/lollipop.png")}
          style={styles.buttonImageIconStyle}
        />
        <View style={styles.buttonIconSeparatorStyle} />
        <Text style={styles.buttonTextStyle}>Pirulito por R$ 6,00 REAIS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => {
          if(resultado >=7){
            setDoce("7")}
            else{
              Alert.alert(
                "Dinheiro Insuficiente",
                "Esta Maquina precisa de uma valor maior ou igual ao doce selecionado"
              );
            }
        }  
            }>
      
        <Image
          source={require("../../../assets/chocolate.png")}
          style={styles.buttonImageIconStyle}
        />
        <View style={styles.buttonIconSeparatorStyle} />
        <Text style={styles.buttonTextStyle}>Chocolate por R$ 7,00 REAIS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => {
          if(resultado >=8){
            setDoce("8")}
            else{
              Alert.alert(
                "Dinheiro Insuficiente",
                "Esta Maquina precisa de uma valor maior ou igual ao doce selecionado"
              );
            }
        }  
            }>
        <Image
          source={require("../../../assets/candy.png")}
          style={styles.buttonImageIconStyle}
        />
        <View style={styles.buttonIconSeparatorStyle} />
        <Text style={styles.buttonTextStyle}>Bala por R$ 8,00 REAIS</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={reset}>
            Reset
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={show}>
          <Text style={styles.buttonText}>Finalizar</Text>
        </TouchableOpacity>
        <View>
          <View style={styles.fill} />
        </View>
      </View>
      <BottomModal backdropColor="rgba(0,0,0,0.5)" height={450} {...modalProps}>
        <View style={styles.modalContainer}>
          <Text style={[styles.headingText, styles.header]}>Seu Troco é</Text>
          <Text style={[styles.headingText, styles.header]}>
            R${resultado - doce}{" "}
          </Text>
          {/* Arrumar valor de troco negativo */}
          <TouchableOpacity style={styles.buttonSecondary} onPress={resetmodal}>
            <Text style={styles.buttonText}>Fechar </Text>
          </TouchableOpacity>
        </View>
      </BottomModal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#040316",
    paddingTop: Platform.OS === "android" ? statusBarHeight : 25,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignSelf: "center",
    flex: 1,
    width: "98%",
    height: 120,
    marginBottom: 20,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    height: 1000,
    width: 1000,
  },
  text: {
    marginTop: 22,
    fontSize: 18,
    marginLeft: 20,
    marginRight:28
  },
  visor: {
    backgroundColor: "#c4c4c4c4",
    width: 150,
    height: 50,
    justifyContent: "center",
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight:10,
    textAlign: "center",
    fontSize: 25,
    flexDirection: "row"
  },
  viewvisor:{
    flexDirection:"row"
  },
  swipe: {
    marginTop: 10,
    paddingTop: 30,
    paddingBottom: 20,
  },
  buttonStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#8d68bd",
    borderWidth: 0.5,
    borderColor: "#82a2f5",
    height: 50,
    width: 280,
    borderRadius: 7,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
  buttonTextStyle: {
    color: "#000",
    marginBottom: 4,
    marginLeft: 20,
    fontSize: 16,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: "#fff",
    width: 1,
    height: 40,
  },
  button: {
    backgroundColor: "#8d68bd",
    borderColor: "#82a2f5",
    borderWidth: 0.5,
    borderRadius: 5,
    alignItems: "center",
    textAlign: "center",
    height: 40,
    width: 100,
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonText: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    paddingTop: 5,
  },
  headingText: {
    fontWeight: "700",
    color: "black",
    fontSize: 30,
  },
  header: { marginBottom: 30 },

  fill: { flex: 4 / 8 },

  buttonSecondary: {
    backgroundColor: "#D9F6FF",
    borderRadius: 10,
    padding: 8,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
