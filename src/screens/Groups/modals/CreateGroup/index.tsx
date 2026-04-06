import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';
import useStyles from './styles';
import { ICreateGroupProps } from './types';
import { submitGroup } from './lib';
import TextComponent from '../../../../components/Text';
import Button from '../../../../components/Button';
import TextField from '../../../../components/TextField';
import StyledButton from '../../../../components/StyledButton';
import { IGame, IGroup } from '../../../../global/types';
import { addGroup } from '../../../../reducers/user/userSlice';
import { RootState } from '../../../../reducers/store';
import SearchableList from '../../../../components/SearchbleList';
import SelectedGame from '../../components/SelectedGame';

const CreateGroup: React.FC<ICreateGroupProps> = ({ onClose }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const allGames = useSelector((state: RootState) => state.user.allGames);

  const [name, setName] = useState<string>('');
  const [selectedGames, setSelectedGames] = useState<IGame[]>([]);

  const addGameToList = (game: IGame) => {
    if (!selectedGames.includes(game)) {
      setSelectedGames([...selectedGames, game]);
    }
  }

  const removeGameFromList = (game: IGame) => {
    let updatedList: IGame[] = [];

    selectedGames.forEach((item, index) => {
      if (item.id !== game.id) {
        updatedList.push(item);
      }
    })

    setSelectedGames(updatedList);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextComponent weight='bold' style={styles.headerTitle}>
          Criar grupo
        </TextComponent>

        <Button onPress={onClose}>
          <Ionicons
            name='close'
            style={styles.headerIcon}
          />
        </Button>
      </View>

      <View style={styles.content}>
        <TextComponent
          weight='semibold'
          style={styles.label}
        >
          Informações do grupo
        </TextComponent>

        <View style={styles.field}>
          <TextField
            value={name}
            onTextChange={setName}
            placeholder='Nome do grupo'
            maxCharacters={40}
          />
        </View>

        <TextComponent
          weight='semibold'
          style={styles.label}
        >
          Buscar jogo
        </TextComponent>
        <SearchableList list={allGames} onItemSelect={addGameToList} />

        <TextComponent
          weight='semibold'
          style={styles.label}
        >
          Jogos selecionados
        </TextComponent>
        <FlatList
          style={styles.selectedGamesContainer}
          data={selectedGames}
          keyExtractor={(game, index) => game.id || index.toString()}
          renderItem={({ item }) =>
            <SelectedGame
              key={item.id}
              game={item}
              deleteItem={removeGameFromList}
            />
          }
        />

        <StyledButton
          onPress={() =>
            submitGroup(
              name,
              selectedGames,
              onClose,
              (group: IGroup) => dispatch(addGroup(group)))
          }
        >
          <TextComponent light weight='bold'>
            Criar
          </TextComponent>
        </StyledButton>
      </View>
    </View>
  );
}

export default CreateGroup;