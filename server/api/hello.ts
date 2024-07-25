let counter = 0;

export default defineEventHandler((_event) => {
  counter++;

  return {
    code: 200,
    data: {
      hello: 'world',
      counter,
    },
  };
});
