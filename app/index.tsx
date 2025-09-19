import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ChildComponent from "./components/childComponent";

export default function Index() {
  const [count, setCount] = useState(1);
  const [childrendContent, setChildrendContent] = useState("Món quà từ con");

  const callbackFunction = (childData: string) => {
    setChildrendContent(childData);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', backgroundColor: "yellow" }}>
        <Text style={styles.textHeader}>Tìm hiểu State của Component</Text>
        <Text style={{ color: "#000000" }}>VNTALKING.COM</Text>
      </View>
      <TouchableOpacity
        onPress={() => alert('Hello 23MT!')}
        style={{ ...styles.btn, backgroundColor: 'blue' }}>
        <Text style={styles.btnText}> Press me</Text>
      </TouchableOpacity>
      <View style={styles.body}>
        <Text style={{ marginTop: 20, fontSize: 18, color: 'purple' }}>
          Nội dung con gửi: {childrendContent}
        </Text>
        <TouchableOpacity
          onPress={() => setCount(count + 1)}
          style={{ ...styles.btn, backgroundColor: 'blue' }}>
          <Text style={styles.btnText}> Tăng lên 1 đơn vị</Text>
        </TouchableOpacity>

        <ChildComponent counter={count} parentCallback={callbackFunction} />


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000ff"
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 20,
    borderColor: "blue",
    borderWidth: 5
  },
  btn: {
    backgroundColor: '#086972',
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: "bold",
    color: "green"
  }
});
