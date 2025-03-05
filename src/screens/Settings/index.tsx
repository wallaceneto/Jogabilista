import React from 'react';
import { View, Linking } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import useStyles from './styles';
import { appVersion, cleanStorageAlert, repositoryURL } from './lib';
import SectionButton from './components/SectionButton';
import TextComponent from '../../components/Text';
import Button from '../../components/Button';
import { NavigationProps } from '../../global/types';

const Settings: React.FC = () => {
  const styles = useStyles();
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.background}>
      <Button
        style={styles.header}
        onPress={() => navigation.goBack()}
      >
        <Ionicons
          name='arrow-back-outline'
          size={24}
        />

        <TextComponent weight='medium' style={styles.headerText}>
          Ajustes
        </TextComponent>
      </Button>

      <View style={styles.section}>
        <TextComponent style={styles.sectionTitle}>
          Preferências
        </TextComponent>

        <SectionButton
          onPress={() => navigation.push('SwitchTheme')}
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
      
      <View style={styles.section}>
        <TextComponent style={styles.sectionTitle}>
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
      
      <View style={styles.section}>
        <TextComponent style={styles.sectionTitle}>
          Limpeza
        </TextComponent>

        <SectionButton
          warning
          onPress={cleanStorageAlert}
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