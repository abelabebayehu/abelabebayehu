import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function EstimatorScreen() {
  const [buildingType, setBuildingType] = useState('Residential');
  const [floorArea, setFloorArea] = useState('120');
  const [floors, setFloors] = useState('1');
  const [result, setResult] = useState<string | null>(null);

  function estimate() {
    const area = Number(floorArea) * Number(floors);
    // Very rough mock estimates to demo UI
    const cementBags = Math.ceil(area * 0.5);
    const sandTons = Math.ceil(area * 0.08);
    const rebarKg = Math.ceil(area * 10);
    const blocks = Math.ceil(area * 8);
    setResult(
      `For a ${buildingType} of ${area} m²:
 - Cement: ${cementBags} bags
 - Sand: ${sandTons} tons
 - Rebar: ${rebarKg} kg
 - Blocks: ${blocks} pcs`
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Material Estimator</Text>
      <View style={styles.row}><Text style={styles.label}>Building type</Text>
        <TextInput value={buildingType} onChangeText={setBuildingType} style={styles.input} placeholder="Residential / Commercial / Industrial" />
      </View>
      <View style={styles.row}><Text style={styles.label}>Floor area (m²)</Text>
        <TextInput value={floorArea} onChangeText={setFloorArea} keyboardType='numeric' style={styles.input} placeholder="e.g. 120" />
      </View>
      <View style={styles.row}><Text style={styles.label}>Floors</Text>
        <TextInput value={floors} onChangeText={setFloors} keyboardType='numeric' style={styles.input} placeholder="e.g. 2" />
      </View>
      <TouchableOpacity onPress={estimate} style={styles.button}><Text style={styles.buttonText}>Estimate Materials</Text></TouchableOpacity>
      {result && (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>{result}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  row: { marginBottom: 12 },
  label: { fontSize: 14, marginBottom: 6, opacity: 0.8 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 10, padding: 12 },
  button: { backgroundColor: '#2563eb', padding: 14, borderRadius: 10, alignItems: 'center', marginTop: 6 },
  buttonText: { color: 'white', fontWeight: '600' },
  resultBox: { marginTop: 16, padding: 12, borderRadius: 10, backgroundColor: 'rgba(37,99,235,0.08)' },
  resultText: { fontFamily: 'monospace' },
});

