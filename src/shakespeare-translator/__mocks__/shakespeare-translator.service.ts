export default jest.fn().mockImplementation(() => {
  return {
    translate: text => {
      return 'Woop!';
    },
  };
});
