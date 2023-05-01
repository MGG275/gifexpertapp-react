import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [imputValue, setImputValue] = useState("");

  const handleImputChange = (e) => {
    setImputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

		if( imputValue.trim().length > 2){ 
			//----- la propiedad trim de los string elimina los espacios en blanco tanto al principio como la final
			setCategories( cats => [ imputValue, ...cats]);
			setImputValue('')
		}
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={imputValue}
				// pattern="^[A-Za-z]+$"
        placeholder="Escribe los gif a buscar"
        onChange={handleImputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
	 setCategories: PropTypes.func.isRequired
}