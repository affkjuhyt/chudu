import { FlatList, View, Text } from "react-native";

const data = [
    { id: 1, title: 'John Doe 1' },
    { id: 2, title: 'John Doe 2' },
    { id: 3, title: 'John Doe 3' },
    { id: 4, title: 'John Doe 4' },
    { id: 5, title: 'John Doe 5' },
    { id: 6, title: 'John Doe 6' },
    { id: 7, title: 'John Doe 7' },
]

const renderItem = ({ item }) => {
    return (
        <View style={{ padding: 20, marginTop: 50, backgroundColor: 'green' }}>
            <Text>{item.title}</Text>
        </View>
    )
}

const DetailList = () => {
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
        />
    )
}

export default DetailList;

