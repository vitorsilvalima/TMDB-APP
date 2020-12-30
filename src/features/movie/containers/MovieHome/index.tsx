import { usePopularMovies } from "@features/movie/hooks";
import { getPopularMovies, Movie } from "@features/movie/services/movie";
import Colors from "@shared/constants/Colors";
import { BaseScreen, Button } from "@shared/ui";
import React, { useCallback, useState } from "react";
import { useMemoOne, useCallbackOne } from "use-memo-one";
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  View,
  ViewToken,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useInfiniteQuery } from "react-query";
import { LinearGradient } from "expo-linear-gradient";
import { Text, Typography } from "@shared/ui/Text";
import { Fonts } from "@shared/hooks/useCachedResources";
import { genres } from "@features/movie/constants";

const { width, height } = Dimensions.get("window");

const SPACING = 40;
const ITEM_SIZE = width;
const BACKDROP_HEIGHT = height;

interface MovieHome {
  movies: Movie[];
  selectedMovieIndex: number;
  onSelectedMovieIndexChange(index: number): void;
  onLoadMore(): void;
}

export const MovieHomeContainer = ({
  movies,
  selectedMovieIndex,
  onSelectedMovieIndexChange,
  onLoadMore,
}: MovieHome) => {
  const selectedMovie: Movie | undefined = movies[selectedMovieIndex];

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const hanbleOnViewableItemsChanged = useCallbackOne(
    ({
      viewableItems,
    }: {
      viewableItems: ViewToken[];
      changed: ViewToken[];
    }) => {
      if (viewableItems[0]?.index) {
        onSelectedMovieIndexChange(viewableItems[0]?.index);
      }
    },
    []
  );

  return (
    <View style={{ flex: 1, backgroundColor: Colors.dark.background }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
        renderToHardwareTextureAndroid
        snapToInterval={ITEM_SIZE}
        contentContainerStyle={{
          marginTop: 20,
          alignItems: "flex-start",
        }}
        style={{ flexGrow: 0 }}
        horizontal
        keyExtractor={(item, index) => String(item.id + index)}
        data={movies}
        snapToAlignment="start"
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
        onViewableItemsChanged={hanbleOnViewableItemsChanged}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
            (index + 1) * ITEM_SIZE,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [-40, 0, -40],
            extrapolate: "clamp",
          });

          return (
            <View style={{ width: ITEM_SIZE }}>
              <Animated.View
                style={{
                  padding: SPACING,
                  paddingBottom: SPACING / 2,
                  alignItems: "center",
                  borderRadius: 34,
                }}
              >
                <Animated.Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w300/${item.poster_path}`,
                  }}
                  style={[styles.posterImage, { transform: [{ translateY }] }]}
                />
              </Animated.View>
            </View>
          );
        }}
        onEndReached={onLoadMore}
        onEndReachedThreshold={0.7}
      />

      {selectedMovie && (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            paddingHorizontal: 20,
            paddingBottom: 20,
          }}
        >
          <Text
            fontFamily={Fonts.montSerratRegular}
            fontSize={28}
            color="white"
            style={{ textAlign: "center", paddingBottom: 10 }}
          >
            {selectedMovie.title}
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            {selectedMovie.genre_ids.map((genresId) => {
              const genre = genres.find((item) => item.id === genresId);

              return (
                <View
                  key={genre?.name}
                  style={{
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    margin: 5,
                    borderRadius: 12,
                    backgroundColor: "rgba(255,255,255, 0.1)",
                  }}
                >
                  <Text
                    fontFamily={Fonts.montSerratRegular}
                    fontSize={12}
                    color="white"
                    style={{ textAlign: "center" }}
                  >
                    {genre?.name}
                  </Text>
                </View>
              );
            })}
          </View>
          <View style={{ flex: 1, justifyContent: "flex-end", width: "100%" }}>
            <Button title="Details" color="primary" onPress={() => null} />
          </View>
        </View>
      )}
    </View>
  );
};

export default MovieHome;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  posterImage: {
    width: "100%",
    height: ITEM_SIZE * 1.2,
    resizeMode: "cover",
    borderRadius: 24,
  },
});
