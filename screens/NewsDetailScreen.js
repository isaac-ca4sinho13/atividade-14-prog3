import React from 'react';
import { 
  View, Text, Image, ScrollView, TouchableOpacity, StyleSheet 
} from 'react-native';

export default function NewsDetailScreen({ route, navigation }) {
  const { title, description, content, image, link } = route.params;

  return (
    <ScrollView style={styles.container}>
    
      {image && <Image source={{ uri: image }} style={styles.bigImage} />}

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.text}>
        {content || description || "Sem conteúdo disponível."}
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("NewsWebView", { url: link })}>
        <Text style={styles.link}>Ler notícia completa</Text>
      </TouchableOpacity>

      {image && <Image source={{ uri: image }} style={styles.smallImage} />}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  bigImage: {
    width: "100%",
    height: 220,
    borderRadius: 14,
    marginBottom: 16,
  },
  smallImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    color: "#444",
    lineHeight: 22,
  },
  link: {
    marginTop: 18,
    fontSize: 16,
    color: "#2A6BE4",
    fontWeight: "600",
  },
});
