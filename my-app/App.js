import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Pressable, Text } from 'react-native'
import { registerRootComponent } from "expo";
import { WalletConnectModal, useWalletConnectModal } from '@walletconnect/modal-react-native'

const projectId = 'aa6fd373428123543eea8dac792259ed'

const providerMetadata = {
  name: 'YOUR_PROJECT_NAME',
  description: 'YOUR_PROJECT_DESCRIPTION',
  url: 'https://your-project-website.com/',
  icons: ['https://your-project-logo.com/'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com'
  }
}

export default function App() {
  const { open, isConnected, address, provider } = useWalletConnectModal();

  const handleButtonPress = async() => {
    if(isConnected){
      return provider?.disconnect()
    } else {
      return open();
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>WalletConnect Modal RN Tutorial</Text>
      <Text>{isConnected ? address : "Status: Not Connected"}</Text>
      <Pressable onPress={handleButtonPress} style={styles.pressableMargin}>
        <Text>{isConnected ? "Disconnect" : "Connect"}</Text>
      </Pressable>

      <WalletConnectModal
        projectId={projectId}
        providerMetadata={providerMetadata}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
