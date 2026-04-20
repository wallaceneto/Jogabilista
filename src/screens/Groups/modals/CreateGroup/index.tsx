import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';
import useStyles from './styles';
import { ICreateGroupProps } from './types';
import { addGameToList, handleDelete, handleSubmit, removeGameFromList } from './lib';
import TextComponent from '../../../../components/Text';
import Button from '../../../../components/Button';
import TextField from '../../../../components/TextField';
import StyledButton from '../../../../components/StyledButton';
import { IGame } from '../../../../global/types';
import { RootState } from '../../../../reducers/store';
import SearchableList from '../../../../components/SearchbleList';
import SelectedGame from '../../components/SelectedGame';
import { useNavigation } from '@react-navigation/native';

const CreateGroup: React.FC<ICreateGroupProps> = ({ onClose, group }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const allGames = useSelector((state: RootState) => state.user.allGames);

  const [name, setName] = useState<string>('');
  const [selectedGames, setSelectedGames] = useState<IGame[]>([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (group) {
      setName(group.name);
      setSelectedGames(group.games);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextComponent weight='bold' style={styles.headerTitle}>
          {group ? 'Editar' : 'Criar'} grupo
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

        <TextField
          value={name}
          onTextChange={setName}
          placeholder='Nome do grupo'
          maxCharacters={40}
          errorMsg={errorMsg}
        />

        <TextComponent
          weight='semibold'
          style={styles.label}
        >
          Buscar jogo
        </TextComponent>

        <SearchableList
          list={allGames}
          onItemSelect={(game: IGame) => addGameToList(game, selectedGames, setSelectedGames)}
        />

        <View style={styles.selectedGamesContainer}>
          <TextComponent
            weight='semibold'
            style={styles.label}
          >
            Jogos selecionados
          </TextComponent>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={styles.selectedGames}
            data={selectedGames}
            keyExtractor={(game, index) => game.id || index.toString()}
            renderItem={({ item }) =>
              <SelectedGame
                key={item.id}
                game={item}
                deleteItem={() => removeGameFromList(item, selectedGames, setSelectedGames)}
              />
            }
            ListEmptyComponent={() =>
              <TextComponent>
                Sem jogos
              </TextComponent>
            }
          />
        </View>

        {group &&
          <StyledButton
            style={styles.deleteButton}
            onPress={() => handleDelete(group.id, onClose, dispatch, () => navigation.goBack())}
          >
            <TextComponent style={styles.deleteText} weight='bold'>
              Deletar grupo
            </TextComponent>
          </StyledButton>
        }

        <StyledButton
          onPress={() => handleSubmit(
            name,
            setErrorMsg,
            selectedGames,
            onClose,
            dispatch,
            group
          )}
        >
          <TextComponent light weight='bold'>
            {group ? 'Salvar edição' : 'Criar'}
          </TextComponent>
        </StyledButton>
      </View>
    </View>
  );
}

export default CreateGroup;