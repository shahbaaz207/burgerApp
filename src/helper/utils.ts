import { Platform, Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const navigate = (navigation: any, name: string, data = {}) => {
  return () => {
    if (navigation && navigation.navigate) navigation.navigate(name, data);
  };
};

export { navigate };

const scale: number = SCREEN_WIDTH / 320;

export function normalize(size: number): number {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
