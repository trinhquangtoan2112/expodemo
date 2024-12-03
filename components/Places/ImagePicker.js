import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
  launchImageLibraryAsync,
} from "expo-image-picker";
import { useState } from "react";
import { Colors } from "../../constant/colors";
import * as ImagePicker1 from "expo-image-picker";

function ImagePicker() {
  const [pickedImage, setPickedImage] = useState();

  const [cameraPermissionInformation, requestPermission] =
    ImagePicker1.useCameraPermissions();

  async function verifyPermissions() {
    if (
      cameraPermissionInformation.status ===
      ImagePicker1.PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (
      cameraPermissionInformation.status ===
      ImagePicker1.PermissionStatus.DENIED
    ) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app."
      );
      return false;
    }

    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }
    console.log(11242412);
    try {
      const image = await ImagePicker1.launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5,
      });
      console.error(image);
      console.log(image.assets[0].uri);
      setPickedImage(image.assets[0].uri);

      console.log(66666);
    } catch (error) {
      console.log(4444);
    }
  }

  let imagePreview = <Text>No image taken yet.</Text>;

  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
