import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Text, View } from '@/components/Themed';

type Message = { id: string; role: 'user' | 'assistant'; content: string };

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 'm1', role: 'assistant', content: 'Hi! Tell me about your project and I will estimate required materials.' },
  ]);
  const [input, setInput] = useState('We are building a 3-bedroom bungalow, 120 m²');

  function send() {
    if (!input.trim()) return;
    const userMsg: Message = { id: String(Date.now()), role: 'user', content: input.trim() };
    // Placeholder assistant reply
    const assistantMsg: Message = {
      id: String(Date.now() + 1),
      role: 'assistant',
      content: 'Thanks! I will analyze this and suggest materials based on your floor area and structure type.',
    };
    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setInput('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Project Chat</Text>
      <FlatList
        style={{ flex: 1 }}
        data={messages}
        keyExtractor={(m) => m.id}
        contentContainerStyle={{ gap: 10, paddingVertical: 8 }}
        renderItem={({ item }) => (
          <View style={[styles.bubble, item.role === 'user' ? styles.userBubble : styles.assistantBubble]}>
            <Text style={styles.bubbleText}>{item.content}</Text>
          </View>
        )}
      />
      <View style={styles.composer}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Describe your building and location..."
          style={styles.input}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={send}><Text style={{ color: 'white', fontWeight: '600' }}>Send</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  composer: { flexDirection: 'row', gap: 8, alignItems: 'center' },
  input: { flex: 1, borderWidth: 1, borderColor: '#ddd', borderRadius: 10, padding: 12 },
  sendBtn: { backgroundColor: '#16a34a', paddingVertical: 12, paddingHorizontal: 16, borderRadius: 10 },
  bubble: { maxWidth: '80%', borderRadius: 12, padding: 10 },
  userBubble: { alignSelf: 'flex-end', backgroundColor: 'rgba(37,99,235,0.12)' },
  assistantBubble: { alignSelf: 'flex-start', backgroundColor: 'rgba(0,0,0,0.06)' },
  bubbleText: {},
});

