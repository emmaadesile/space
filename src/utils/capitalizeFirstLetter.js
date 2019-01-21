const capitalizeFirstLetter = str => {
  if (typeof str === 'string' && str.length > 0) {
    if (str.split(' ').length > 0) {
      const words = str.split(' ');
      return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    }
    return `${str[0].toUpperCase()}${str.slice(1)}`;
  }
  return `${str} is not a string`;
};

export default capitalizeFirstLetter;
