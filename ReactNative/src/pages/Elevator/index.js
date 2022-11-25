import React, { useRef, useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  TextInput,
  StatusBar,
} from "react-native";
import LottieView from "lottie-react-native";
import { useBottomModal, BottomModal } from "react-native-lightning-modal";
import { Foundation, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const statusBarHeight = StatusBar.currentHeight;

export default function Elevator() {
  const [save, setSave] = useState(false);
  const [visor, setVisor] = useState("T");


  const { dismiss, show, modalProps } = useBottomModal();

  const animation = useRef(null);

  const firstRun = useRef(true);


  useEffect(() => {
    if (firstRun.current) {
      if (save) {
        animation.current.play(100, 100);
      } else {
        animation.current.play(99, 100);
      }
      firstRun.current = false;
    } else if (save) {
      animation.current.play(100, 0);
    } else {
      animation.current.play(0, 100);
      andar();
    }
  }, [save]);

  function andar() {
    setTimeout(dismiss, 3000);
  }
  function visor1(){
    
    setVisor("1")
  }
  function visor2(){
    
    setVisor("2")
  }
  function visor3(){
    
    setVisor("3")
  }
  function reset(){
    
    animation.current.play(100, 100)
    setVisor("T")
    }
    function visorT(){
    
      setVisor("T")
    }


  return (
    <View style={styles.animationContainer}>
      <ImageBackground
        source={{
          uri: "https://media4.giphy.com/media/U3qYN8S0j3bpK/giphy.gif?cid=ecf05e47ce87p41cq132cpml8vz6r4mxrduj5hl1edk8446u&rid=giphy.gif&ct=g",
        }}
        style={styles.imageBackground}
      />


      <View style={styles.viewvisor}>
      <Text style={styles.text}>Andar </Text>
        <TextInput style={styles.visor} value={String(visor)}></TextInput>  
      </View>

      <TouchableOpacity style={styles.button} onPress={show}>
        <Foundation name="elevator" size={80} color="#FFF" />
        <Text style={styles.buttonText}>Chamar Elevador</Text>
      </TouchableOpacity>



      

      <TouchableOpacity
        style={styles.buttonR}
        onPress={reset}
      >
        <Ionicons name="ios-reload-circle-outline" size={50} color="#FFF" />
        <Text style={styles.buttonText}>Reset </Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}></View>

      <BottomModal 
      backdropColor="#191919" height={800} {...modalProps}>

        <TextInput style={styles.visort} value={String(visor)}></TextInput>  
        <View style={styles.viewmodal}>
          <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={() => setSave(!save)}>
            <Text style={styles.buttonText}>Entrar no Elevador</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={() => setSave(!save)}>
            <Text style={styles.buttonText}>Sair do Elevador</Text>
          </TouchableOpacity>



          </View>

        <View style={styles.modalContainer}>
    
        
        <View style={styles.viewmodal}>
        <TouchableOpacity style={styles.buttontree} onPress={visorT}>
        <MaterialCommunityIcons name="format-text" size={40} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttontree} onPress={visor1}>
          <MaterialCommunityIcons name="numeric-1-box" size={40} color="black" />    
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttontree} onPress={visor2}>
          <MaterialCommunityIcons name="numeric-2-box" size={40} color="black" />    
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttontree} onPress={visor3}>
          <MaterialCommunityIcons name="numeric-3-box" size={40} color="black" />    
          </TouchableOpacity>

          </View>

          <TouchableOpacity style={styles.buttonSecondary} onPress={dismiss}>
            <Text style={styles.buttonText}>Fechar </Text>
          </TouchableOpacity>

          <LottieView
            autoPlay={false}
            loop={false}
            ref={animation}
            style={{
              width: 550,
              height: 550,
              backgroundColor: "#eee",
            }}
            source={require("../../../assets/elevator.json")}
          />
        </View>
      </BottomModal>
    </View>
  );
}


const styles = StyleSheet.create({
  animationContainer: {
    paddingTop: Platform.OS === "android" ? statusBarHeight : 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    paddingTop: 20,
  },
  buttonText: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    color: "#FFF",
  },
  buttonSecondary: {
    backgroundColor: "#191919",
    borderRadius: 10,
    padding: 8,
    marginLeft:10,
    marginRight:10
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    height: 800,
    width: 400,
  },
  button: {
    alignItems: "center",
    textAlign: "center",
    height: 70,
    width: 100,
    marginTop: 120,
    marginBottom: 40,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    color: "#FFF",
  },
  buttonR: {
    alignItems: "center",
    textAlign: "center",
    height: 70,
    width: 100,
    marginLeft: 20,
    marginRight: 20,
  },
  visor: {
    backgroundColor: "#c4c4c4c4",
    width: 150,
    height: 50,
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    textAlign: "center",
    fontSize: 25,
    flexDirection: "row",
  },
  viewvisor: {
    flexDirection:"column"
  },
  text: {
    fontSize: 20,
    marginTop: 70,
    marginLeft:60,
    color:"#FFFF"
  },
   viewmodal:{
    flexDirection:"row"
  },
  viewb:{
    alignItems: "flex-start"
  },
  buttontree: {
    alignItems: "flex-start"
  },
  visort: {
    backgroundColor: "#c4c4c4c4",
    width: 150,
    height: 50,
    marginTop:50,
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    textAlign: "center",
    fontSize: 25,
  },
});
