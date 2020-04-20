const generateMessage = (from, text) => ({
  from,
  text,
  createdAt: new Date().getTime(),
});

export default generateMessage;
