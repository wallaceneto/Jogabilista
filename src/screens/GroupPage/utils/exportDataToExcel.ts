import * as XLSX from 'xlsx';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { IGameXlsxFormat } from '../types';

const exportDataToExcel = async (
  games: IGameXlsxFormat[],
  groupName: string
) => {
  try {
    let wb = XLSX.utils.book_new();
    let ws = XLSX.utils.json_to_sheet(games);
    XLSX.utils.book_append_sheet(wb, ws, "Jogos");

    const wbout = XLSX.write(wb, { type: "base64", bookType: "xlsx" });
    const fileName = `Jogabilista_${groupName.replace(/\s+/g, '_')}.xlsx`;
    const fileUri = `${FileSystem.documentDirectory}${fileName}`;

    try {
      await FileSystem.writeAsStringAsync(fileUri, wbout, {
        encoding: FileSystem.EncodingType.Base64,
      });

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(fileUri);
      } else {
        alert("O arquivo foi salvo, mas o compartilhamento não está disponível.");
      }

    } catch (error) {
      console.log("Falha ao salvar arquivo", error);
    }

  } catch (error) {
    console.log("Falha ao gerar planilha", error);
  }
}

export { exportDataToExcel }