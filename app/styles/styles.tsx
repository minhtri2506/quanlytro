import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWhite: {
    color: '#fff',
  },
  buttonContainer: {
    padding: 10,
  },
  pd16: {
    padding: 16,
  },
  table: {
    marginTop: 10,
    borderWidth: 1, // Viền xung quanh bảng
    borderColor: '#ccc',
    borderRadius: 5, // Bo góc bảng
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1, // Viền dưới cho từng hàng
    borderBottomColor: '#ddd',
  },
  header: {
    backgroundColor: '#f0f0f0', // Màu nền cho header
    borderBottomWidth: 2, // Viền dưới dày hơn cho header
    borderBottomColor: '#ccc',
  },
  headerTextStatical: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    paddingVertical: 10,
    borderRightWidth: 1, // Viền bên phải của ô
    borderRightColor: '#ddd',
  },
  lastCell: {
    borderRightWidth: 0, // Loại bỏ viền bên phải cho ô cuối cùng
  },
  button: {
    marginBottom: 16, // Khoảng cách dưới nút
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Màu chữ
    marginBottom: 16, // Khoảng cách dưới
  },
  input: {
    height: 40, // Chiều cao của TextInput
    borderColor: '#ccc', // Màu viền
    borderWidth: 1, // Độ rộng viền
    borderRadius: 8, // Bo góc viền
    paddingHorizontal: 10, // Padding ngang
    marginBottom: 16, // Khoảng cách dưới
  },
});