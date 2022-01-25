import {StyleSheet} from 'react-native';
const silly_flex = StyleSheet.create({
  f1: {
    flex: 1,
  },
  f2: {
    flex: 2,
  },
  f3: {
    flex: 3,
  },
  fg1: {
    flexGrow: 1,
  },
  fg2: {
    flexGrow: 2,
  },
  fg3: {
    flexGrow: 3,
  },
  fr: {
    flexDirection: 'row',
  },
  jcc: {
    justifyContent: 'center',
  },
  jcs: {
    justifyContent: 'flex-start',
  },
  jce: {
    justifyContent: 'flex-end',
  },
  jcbtw: {
    justifyContent: 'space-between',
  },
  jceven: {
    justifyContent: 'space-evenly',
  },
  jcaround: {
    justifyContent: 'space-around',
  },
  aic: {
    alignItems: 'center',
  },
  ais: {
    alignItems: 'flex-start',
  },
  aie: {
    alignItems: 'flex-end',
  },
  aibtw: {
    alignItems: 'space-between',
  },
  aieven: {
    alignItems: 'space-evenly',
  },
  aiaround: {
    alignItems: 'space-around',
  },
});
export default silly_flex;
