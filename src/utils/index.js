export const fetchData = async () => {
  return new Promise((res) => {
    setTimeout(res, 2000, { status: 200, data: { nome: "Danilo"}})
  })
}