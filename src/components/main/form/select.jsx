import { SelectData } from "./styledForm";

export const Select = ({ formData, setFormData }) => {
  const handleTypeChange = (e) => {
    setFormData({ ...formData, type: e.target.value });
  };

  return (
    <SelectData onChange={handleTypeChange} value={formData.type}>
      <option value=""></option>
      <option value="deposit">Entrada</option>
      <option value="withdraw">Despesa</option>
    </SelectData>
  );
};
