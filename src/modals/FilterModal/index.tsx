import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import useStyles from './styles';
import { IFilterModalProps } from './types';
import { cleanAllFilters, platformOptions, scoreOptions, statusOptions } from './lib';

import FiltersCheckboxs from './components/FiltersCheckboxs';
import TextComponent from '../../components/Text';
import Button from '../../components/Button';
import ToggleView from '../../components/ToggleView';
import Divider from '../../components/Divider';
import LoadingIndicator from '../../components/LoadingIndicator';
import StyledButton from '../../components/StyledButton';
import { ThemeContext } from '../../storage/context';

const FilterModal: React.FC<IFilterModalProps> = ({
  platformFilters,
  setPlatformFilters,
  scoreFilters,
  setScoreFilters,
  statusFilters,
  setStatusFilters,
  applyFilter,
}) => {
  const styles = useStyles();
  const {colors} = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);

  const [platformFilterOpen, setPlatformFilterOpen] = useState(true);
  const [scoreFilterOpen, setScoreFilterOpen] = useState(true);
  const [statusFilterOpen, setStatusFilterOpen] = useState(true);

  return (
    <View style={styles.background} >
      <View style={styles.container}>
        <View>
          <View style={styles.header}>
            <TextComponent weight='bold' style={styles.headerText}>
              Aplicar filtro
            </TextComponent>

            <Button onPress={applyFilter}>
              <Ionicons
                name='close'
                style={styles.headerIcon}
              />
            </Button>
          </View>

          {loading ? <LoadingIndicator style={styles.loading} />
            :
            <View style={styles.content}>
              <ToggleView
                text={'Plataforma'}
                isPressed={platformFilterOpen}
                setIsPressed={setPlatformFilterOpen}
              >
                <FiltersCheckboxs
                  content={platformOptions(platformFilters, setPlatformFilters)}
                  platformFilters={platformFilters}
                  scoreFilters={scoreFilters}
                  statusFilters={statusFilters}
                />
              </ToggleView>

              <Divider style={styles.divider} />

              <ToggleView
                text={'Classificação'}
                isPressed={scoreFilterOpen}
                setIsPressed={setScoreFilterOpen}
              >
                <FiltersCheckboxs
                  content={scoreOptions(scoreFilters, setScoreFilters)}
                  platformFilters={platformFilters}
                  scoreFilters={scoreFilters}
                  statusFilters={statusFilters}
                />
              </ToggleView>

              <Divider style={styles.divider} />

              <ToggleView
                text={'Status'}
                isPressed={statusFilterOpen}
                setIsPressed={setStatusFilterOpen}
              >
                <FiltersCheckboxs
                  content={statusOptions(statusFilters, setStatusFilters)}
                  platformFilters={platformFilters}
                  scoreFilters={scoreFilters}
                  statusFilters={statusFilters}
                />
              </ToggleView>
            </View>
          }
        </View>

        <View style={styles.buttonsContainer}>
          <StyledButton
            onPress={() =>
              cleanAllFilters(setPlatformFilters,setScoreFilters,setStatusFilters,setLoading)
            }
            style={styles.buttons}
            color={colors.commonColors.lightGrey}
          >
            <TextComponent weight='medium'>
              Limpar
            </TextComponent>
          </StyledButton>

          <StyledButton
            onPress={applyFilter}
            style={styles.buttons}
          >
            <TextComponent light weight='semibold'>
              Aplicar
            </TextComponent>
          </StyledButton>
        </View>
      </View>
    </View>
  );
}

export default FilterModal;