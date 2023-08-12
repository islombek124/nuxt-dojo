export default defineEventHandler(async (e) => {
  const { name } = useQuery(e);

  return {
    message: `Hello, ${name}`,
  };
});
