import { useState} from 'react';
import { ImageSourcePropType, StyleSheet, FlatList, Platform, Pressable } from 'react-native';
import { Image } from 'expo-image';

type Props = {
    onSelect: (image: ImageSourcePropType) => void;
    onCloseModal: () => void;
};

export default function EmojiPicker({ onSelect, onCloseModal}: Props) {
    const [emoji] = useState<ImageSourcePropType[]>([
        require("../assets/images/makeup.png"),
        require("../assets/images/woman.png"),
        require("../assets/images/cosmetics.png"),
        require("../assets/images/skincare.png"),
        require("../assets/images/sunscreen.png"),
        require("../assets/images/self-care.png"),
    ]);

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={Platform.OS === 'web'}
            data={emoji}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item, index}) => (
                <Pressable
                onPress={() => {
                    onSelect(item);
                    onCloseModal();
                }}>
                <Image source={item} key={index} style={styles.image} />
                </Pressable>
            )}
        />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image: {
        width: 100,
        height:100,
        marginRight: 20,
    },
});