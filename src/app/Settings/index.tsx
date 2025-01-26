import React from 'react';
import { View, Linking, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

import useStyles from './styles';
import SectionButton from '../../global/pagesLib/Settings/components/SectionButton';
import { appVersion, repositoryURL } from '../../global/pagesLib/Settings/lib';

import TextComponent from '../../components/Text';
import Button from '../../components/Button';
import { cleanStorage } from '../../storage/asyncStorage';
import { reloadAppAsync } from 'expo';

const Settings: React.FC = () => {
  const style = useStyles();

  const reloadApp = async () => {
    await reloadAppAsync('Removing all storage data');
    console.log('Apagou')
  }

  const clearStorageAlert = async () => {
    Alert.alert(
      'Deseja mesmo apagar todos os dados?', 
      'Essa ação é ireverssível e irá limpar todos os dados armazenados nesse aplicativo, restaurando-o as suas configurações de fábrica.',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
          onPress: () => {}
        },
        {
          text: 'Apagar',
          onPress: () => {
            cleanStorage();
            reloadApp();
          }
        }
      ]
    );
  }

  return (
    <View style={style.background}>
      <Button
        style={style.header}
        onPress={() => router.back()}
      >
        <Ionicons
          name='arrow-back-outline'
          size={24}
        />

        <TextComponent weight='medium' style={style.headerText}>
          Ajustes
        </TextComponent>
      </Button>

      <View style={style.section}>
        <TextComponent style={style.sectionTitle}>
          Preferências
        </TextComponent>

        <SectionButton
          onPress={() => router.push('/SwitchTheme')}
          title='Trocar tema'
          icon={
            <Ionicons
              name='brush'
              size={24}
            />
          }
          rightContent={
            <Ionicons
              name='chevron-forward'
              size={24}
            />
          }
        />
      </View>
      
      <View style={style.section}>
        <TextComponent style={style.sectionTitle}>
          Mais
        </TextComponent>

        <SectionButton
          onPress={() => Linking.openURL(repositoryURL)}
          title='Repositório'
          icon={
            <Ionicons
              name='git-branch'
              size={24}
            />
          }
        />
        
        <SectionButton
          onPress={() => {}}
          title='Versão'
          icon={
            <Ionicons
              name='information-circle'
              size={24}
            />
          }
          rightContent={
            <TextComponent>
              {appVersion}
            </TextComponent>
          }
        />
      </View>
      
      <View style={style.section}>
        <TextComponent style={style.sectionTitle}>
          Limpeza
        </TextComponent>

        <SectionButton
          warning
          onPress={clearStorageAlert}
          title='Limpar dados'
          icon={
            <Ionicons
              name='trash'
              size={24}
            />
          }
        />
      </View>
    </View>
  );
}

export default Settings;