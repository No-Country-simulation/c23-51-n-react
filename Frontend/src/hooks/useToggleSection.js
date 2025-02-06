import { useState } from 'react';

const useToggleSection = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return [openSection, toggleSection];
};

export default useToggleSection;
