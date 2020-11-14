import React, { useState } from "react";
import { View, Text, Alert, Modal, Image, ImageBackground } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native-gesture-handler";

import ListCard from "./ListCard";
import ModalCard from "./ModalCard";
const Detail = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  return (
    <ImageBackground
      source={require("../images/back2.png")}
      style={{ height: "100%", width: "100%" }}
    >
      <View
        style={{
          flexDirection: "row",
          marginTop: 40,
          alignItems: "center",
          justifyContent: "space-around",
          // paddingHorizontal: 40,
        }}
      >
        <Icon name="menu" size={30} color="#a2a2db" style={{ width: 20 }} />
        <Icon
          name="account-circle"
          size={33}
          color="#a2a2db"
          style={{ marginLeft: 230 }}
        />
      </View>

      <View
        style={{
          width: "100%",
          marginTop: 50,
          marginBottom: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 50,
            backgroundColor: "#5facdb",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../images/p.png")}
            style={{ height: 26, width: 26 }}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 40,
        }}
      >
        <Text
          style={{
            fontSize: 24,

            color: "#FFF",
          }}
        >
          NYC
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "#a2a2db",
            paddingHorizontal: 15,
          }}
        >
          - - - - - - - - - - - - - - - -
        </Text>
        <Text
          style={{
            fontSize: 24,

            color: "#FFF",
          }}
        >
          IDN
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 40,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: "#a2a2db",
          }}
        >
          New York
        </Text>
        <Text
          style={{
            color: "#a2a2db",
          }}
        >
          Indonesia
        </Text>
      </View>
      <Text
        style={{
          paddingHorizontal: 40,
          color: "#a2a2db",
          paddingVertical: 5,
        }}
      >
        20 June, 2021
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          //paddingHorizontal: 50,
          marginTop: 60,
          justifyContent: "space-around",
        }}
      >
        <Image
          source={require("../images/dots.png")}
          style={{ width: 18, height: 16 }}
        />
        <Image
          source={require("../images/filter.png")}
          style={{ marginLeft: 228, width: 20, height: 18 }}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginVertical: 5,
        }}
      >
        <ListCard
          onCardClick={() => {
            setModalVisibility(true);
          }}
        />
        <ListCard
          onCardClick={() => {
            setModalVisibility(true);
          }}
        />
        <ListCard
          onCardClick={() => {
            setModalVisibility(true);
          }}
        />
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisibility}
            onRequestClose={() => {
              Alert.alert("Modal is closed");
            }}
          >
            <ModalCard
              onPress={() => {
                setModalVisibility(!modalVisibility);
              }}
            />
          </Modal>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Detail;
