import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CamPredict() {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <TouchableOpacity onPress={requestPermission} style={styles.button}>
          <Text style={{ color: '#fff' }}>Permitir câmera</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <CameraView style={{ flex: 1 }} ref={cameraRef} facing="back" />
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: { backgroundColor: '#1e90ff', padding: 15, alignItems: 'center' },
});
