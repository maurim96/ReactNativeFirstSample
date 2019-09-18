import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const IndexScreen = () => {
    const { state, addBlogPost } = useContext(BlogContext);

    return (
        <View>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList
                data={state}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>;
                }}
                keyExtractor={blogPost => blogPost.title}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default IndexScreen;
