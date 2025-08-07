import { Dimensions } from "react-native";

class DimensionsWindow {

    public static widthScale(percentage: number) {
        return Dimensions.get("window").width * percentage
    } 

    public static heightScale(percentage: number) {
        return Dimensions.get("window").height * percentage
    } 

}

export default DimensionsWindow;