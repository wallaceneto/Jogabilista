import React, { useState } from 'react';
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import useStyles from './styles';
import TextComponent from '../../components/Text';
import Button from '../../components/Button';
import { IFilterModalProps } from './types';
import ToggleButton from '../../components/ToggleButton';
import Divider from '../../components/Divider';
import { cleanAllFilters, platformOptions, scoreOptions, statusOptions } from './lib';
import FiltersCheckboxs from './components/FiltersCheckboxs';
import LoadingIndicator from '../../components/LoadingIndicator';

const FilterModal: React.FC<IFilterModalProps> = ({
  platformFilters,
  setPlatformFilters,
  scoreFilters,
  setScoreFilters,
  statusFilters,
  setStatusFilters,
  onClose,
  onSubmit,
}) => {
  const style = useStyles();
  const [loading, setLoading] = useState(false);

  const [platformFilterOpen, setPlatformFilterOpen] = useState(true);
  const [scoreFilterOpen, setScoreFilterOpen] = useState(true);
  const [statusFilterOpen, setStatusFilterOpen] = useState(true);

  return (
    <View style={style.background} >
      <View style={style.container}>
        <View>
          <View style={style.header}>
            <TextComponent weight='bold' style={style.headerText}>
              Aplicar filtro
            </TextComponent>

            <Button onPress={onClose}>
              <Ionicons
                name='close'
                style={style.headerIcon}
              />
            </Button>
          </View>

          {loading ? <LoadingIndicator style={style.loading} />
            :
            <View style={style.content}>
              <ToggleButton
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
              </ToggleButton>

              <Divider style={style.divider} />

              <ToggleButton
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
              </ToggleButton>

              <Divider style={style.divider} />

              <ToggleButton
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
              </ToggleButton>
            </View>
          }
        </View>
        <View style={style.buttonsContainer}>
          <Button
            onPress={() =>
              cleanAllFilters(setPlatformFilters,setScoreFilters,setStatusFilters,setLoading)
            }
            style={style.cleanButton}
          >
            <TextComponent weight='medium'>
              Limpar
            </TextComponent>
          </Button>

          <Button
            onPress={() => {
              onSubmit();
              onClose();
            }}
            style={style.applyButton}
          >
            <TextComponent light weight='semibold'>
              Aplicar
            </TextComponent>
          </Button>
        </View>
      </View>
    </View>
  );
}

export default FilterModal;