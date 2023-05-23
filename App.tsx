import { StyleSheet, Text, View } from 'react-native';
import list from './data/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWind, faWater, faEye } from '@fortawesome/free-solid-svg-icons'
library.add(faWind, faWater, faEye);


//Use only if there is not other choice
/*let data = require('./data/data.json');
const loadedData = JSON.stringify(data);
const json = JSON.parse(loadedData);*/

export default function App() {
  /*const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('./data/data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);*/
  return (
    /*<FlatList
             data={list}
             showsVerticalScrollIndicator={false}
             renderItem={({item}) =>
                <View >
                 <Text>{item.city}</Text>
                </View>
             }
             keyExtractor={(item, index) => index.toString()}
           />*/
    <View style={styles.baseContainer}>
      <View>
        <Text style={[styles.appText, { marginBottom: 33 }]}>{list[0].city} - {list[0].state}</Text>
        <View style={[styles.roundedDate, { marginBottom: 36 }]}>
          <Text style={[styles.appText, { color: '#FFFFFF' }]}>{list[0].date}</Text>
        </View>
      </View>
      <View>
        <Text style={[styles.appText, {fontSize: 19}]}>Ensolarado</Text>
      </View>
      <View style={[{ marginBottom: 52 }]}>
        <Text style={[styles.appText, { fontSize: 144 }]}>{list[0].temperature}</Text>
      </View>
      <View style={[{ marginBottom: 48 }]}>
        <Text style={[styles.appText, { textAlign: 'left', marginBottom: 16 }]}>Resumo diário</Text>
        <Text style={styles.appText}>{list[0].daily_summary}</Text>
      </View>
      <View style={[styles.flexRow, styles.roundedInfo, {gap: 62}]}>
        <View style={[{ flexDirection: 'column', gap: 12, }]}>
          <View>
            <Text style={[styles.infoText]}>{list[0].wind}</Text>
            <Text style={[styles.infoSubText]}>Vento</Text>
          </View>
        </View>
        <View style={[{ flexDirection: 'column', gap: 12, }]}>
          <View>
            <Text style={[styles.infoText]}>{list[0].humidity}</Text>
            <Text style={[styles.infoSubText]}>Umidade</Text>
          </View>
        </View>
        <View style={[{ flexDirection: 'column', gap: 12, }]}>
          <View>
            <Text style={[styles.infoText]}>{list[0].visibility}</Text>
            <Text style={[styles.infoSubText]}>Visibilidade</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F93B',
    paddingHorizontal: 16,
    paddingTop: 85,
    paddingBottom: 72,
  },
  flexRow: {
    flexDirection: 'row',
  },
  appText: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },
  roundedDate: {
    backgroundColor: '#030006',
    paddingBottom: 16,
    paddingTop: 17,
    paddingHorizontal: 31,
    borderRadius: 40,
  },
  roundedInfo: {
    backgroundColor: '#010001',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  infoText: {
    color: '#F9F93B',
    fontWeight: '700',
    fontSize: 19,
    textAlign: 'center',
  },
  infoSubText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#F9F93B',
    fontWeight: '300'
  },
  configIcon: {
    color: '#F9F93B',
    fontSize: 49,
  }
});
