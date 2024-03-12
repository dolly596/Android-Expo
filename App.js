import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Image style={styles.container}
        source ={{uri:'https://imgs.search.brave.com/Q7iEMGO5US1m7xqhLwMkwXW4lKEyS_8cXar-FSWTzEw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wMi50/cnJzZi5jb20vaW1h/Z2UvZmdldC9jZi83/NzQvMC9pbWFnZXMu/dGVycmEuY29tLzIw/MTkvMDQvMDkvbWMt/em9pLWRlLWdhdG8u/anBlZw'}}
      
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height:300,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
