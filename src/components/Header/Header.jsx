import PropTypes from 'prop-types';

const Header = ({ title, btnContent, closeCategories }) => {
  return (
    <>
      <header>
        {btnContent && (
          <button
            onClick={() => {
              closeCategories();
            }}
          >
            {btnContent}
          </button>
        )}
        <h1>{title}</h1>
      </header>
    </>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  btnContent: PropTypes.string,
};

// sfc
