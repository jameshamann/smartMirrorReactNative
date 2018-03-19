import { AppRegistry } from 'react-native';
import App from './App';
import { Buffer } from 'buffer'
import process from 'process'

global.Buffer = Buffer
global.process = process

AppRegistry.registerComponent('smartMirrorReactNative', () => App);
