module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send(['aaa', 'bbb', 'ccc']);
  });
};
