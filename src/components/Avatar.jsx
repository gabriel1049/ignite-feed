import PropTypes from 'prop-types'; // Importe o PropTypes
import styles from './Avatar.module.css';

export function Avatar({ hasBorder = true, src }) {
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} />
  );
}

// Adicione a validação de PropTypes para suas props
Avatar.propTypes = {
  hasBorder: PropTypes.bool, // hasBorder deve ser um booleano (opcional)
  src: PropTypes.string.isRequired // src deve ser uma string e é obrigatório
};