import React from 'react';
import { View, Linking } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

import useStyles from './styles';
import SectionButton from '../../global/pagesLib/Settings/components/SectionButton';
import { appVersion, repositoryURL } from '../../global/pagesLib/Settings/lib';

import TextComponent from '../../components/Text';
import Button from '../../components/Button';

const Settings: React.FC = () => {
  const style = useStyles();

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
          onPress={() => {}}
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