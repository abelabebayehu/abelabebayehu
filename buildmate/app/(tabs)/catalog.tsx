import { StyleSheet, FlatList, Image } from 'react-native';
import { Text, View } from '@/components/Themed';

type Material = {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  priceFrom: string;
};

const MOCK_MATERIALS: Material[] = [
  { id: 'cement', name: 'Cement (50kg)', description: 'High-strength Portland cement', thumbnail: 'https://picsum.photos/seed/cement/200', priceFrom: '$6.50' },
  { id: 'rebar', name: 'Rebar (12mm)', description: 'Ribbed steel reinforcement bar', thumbnail: 'https://picsum.photos/seed/rebar/200', priceFrom: '$4.20/m' },
  { id: 'sand', name: 'Sharp Sand', description: 'Washed sharp sand for concrete', thumbnail: 'https://picsum.photos/seed/sand/200', priceFrom: '$20/ton' },
  { id: 'blocks', name: 'Hollow Blocks (6 inch)', description: 'High-density hollow concrete blocks', thumbnail: 'https://picsum.photos/seed/blocks/200', priceFrom: '$0.85' },
];

export default function CatalogScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catalog</Text>
      <FlatList
        data={MOCK_MATERIALS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 8 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardSubtitle}>{item.description}</Text>
              <Text style={styles.cardPrice}>From {item.priceFrom}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  card: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.03)',
    marginBottom: 12,
    alignItems: 'center',
  },
  thumbnail: { width: 64, height: 64, borderRadius: 8 },
  cardTitle: { fontSize: 16, fontWeight: '600' },
  cardSubtitle: { fontSize: 12, opacity: 0.7, marginTop: 4 },
  cardPrice: { fontSize: 14, fontWeight: '500', marginTop: 6 },
});

