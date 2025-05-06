import react from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import { useTarefas} from '@/hooks/useTarefas';

export default function App() {
    const { tarefas, novaTarefa, setNovaTarefa, adicionarTarefa, removerTarefa} = useTarefas();
    
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de compras</Text>

            <View style={styles.inputContainer}>
                <TextInput
                style={styles.input}
                placeholder="Digite um produto..."
                value={novaTarefa}
                onChangeText={setNovaTarefa}
                />
                <Button color= "pink" title="Adicionar" onPress={adicionarTarefa} />
            </View>

            <FlatList
            data={tarefas}
            keyExtractor={(item) => item.id}
            renderItem={({ item}) =>(
                <View style={styles.tarefaContainer}>
                    <Text style={styles.tarefaTexto}>{item.texto}</Text>
                    <TouchableOpacity onPress={() => removerTarefa(item.id)}>
                        <Text style={styles.remover}>🌸</Text>
                    </TouchableOpacity>
                    </View>
            )}
            />
        </View>
    );
}  

const styles = StyleSheet.create({
    container: {flex: 1, padding: 20, backgroundColor: '#9587ba'},
    titulo: {fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color:'white' },
    inputContainer: { flexDirection: 'row', marginBottom: 10},
    input: {flex: 1, borderWidth: 1, borderColor:'#ccc', padding: 10, borderRadius: 5, marginRight: 10, backgroundColor:'white'},
    tarefaContainer: {flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#e4d6ff',padding: 10, 
        marginBottom: 5, borderRadius: 5, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 3, elevation: 2},
    tarefaTexto: {fontSize: 16},
    remover: {fontSize:18, color: 'red'},
});