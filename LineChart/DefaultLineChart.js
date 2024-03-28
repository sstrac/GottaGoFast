import { LineChart } from 'react-native-chart-kit';
import { Dimensions, View } from 'react-native';

export default function DefaultLineChart(props) {
    const widthBuffer = 20
    return (
        <View>
            <LineChart
                data={getData(props.labels, props.values)}
                width={Dimensions.get("window").width - widthBuffer}
                height={220}
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
            ></LineChart>
        </View>
    );
}

function getData(labels, values) {
    return {
        labels: labels,
        datasets: [{ data: values }]
    }
}