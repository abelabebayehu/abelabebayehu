import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function OrdersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orders</Text>
      <Text style={styles.subtitle}>Track your deliveries in real-time.</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>No orders yet</Text>
        <Text style={styles.cardSubtitle}>Your orders will appear here with live status and driver location.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { marginTop: 8, opacity: 0.7 },
  card: { marginTop: 16, padding: 16, borderRadius: 12, backgroundColor: 'rgba(0,0,0,0.04)' },
  cardTitle: { fontSize: 16, fontWeight: '600' },
  cardSubtitle: { marginTop: 6, fontSize: 12, opacity: 0.8 },
});

