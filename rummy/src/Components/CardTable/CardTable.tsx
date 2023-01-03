import { View, Image, StyleSheet, Text } from 'react-native';

type ICardTable = {
  windowWidth: number
  windowHeight: number
}

export const CardTable = ({ windowWidth, windowHeight }: ICardTable) => {

  const width = 1000;
  const height = 500;

  const top = (windowHeight / 2) - (height / 2);
  const left = (windowWidth / 2) - (width / 2);

  const divStyle = {
    marginTop: top,
    marginLeft: left,
    width: width,
    height: height,
    backgroundColor: 'green'
  };

  console.log({ top, left, width, height });

  return (
    <View style={styles.container} />
  );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "vertical"
    }
});